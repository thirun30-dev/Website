import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";

interface RegisterBody {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  city: string;
  avatar?: string;
}

function validateBody(body: Partial<RegisterBody>): string | null {
  if (!body.fullName?.trim()) return "Full name is required";
  if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    return "Valid email is required";
  if (!body.phone?.trim() || !/^\+?[\d\s\-()]{7,}$/.test(body.phone))
    return "Valid phone number is required";
  if (!body.organization?.trim()) return "College/Organization is required";
  if (!body.designation?.trim()) return "Designation/Year is required";
  if (!body.city?.trim()) return "City is required";
  return null;
}

export async function POST(request: Request) {
  try {
    const body: Partial<RegisterBody> = await request.json();

    // Server-side validation
    const validationError = validateBody(body);
    if (validationError) {
      return Response.json({ message: validationError }, { status: 400 });
    }

    const registration = await prisma.registration.create({
      data: {
        fullName: body.fullName!.trim(),
        email: body.email!.trim().toLowerCase(),
        phone: body.phone!.trim(),
        organization: body.organization!.trim(),
        designation: body.designation!.trim(),
        city: body.city!.trim(),
        avatar: body.avatar ?? "man",
      },
    });

    return Response.json(
      {
        success: true,
        data: {
          id: registration.id,
          fullName: registration.fullName,
          email: registration.email,
          avatar: registration.avatar,
          createdAt: registration.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    // Unique constraint violation — email already registered
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return Response.json(
        {
          message:
            "This email is already registered. You're all set for AWS Community Day!",
          alreadyRegistered: true,
        },
        { status: 409 }
      );
    }

    console.error("[POST /api/register] Unexpected error:", error);
    return Response.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// GET — fetch all registrations (admin use; protect this in production!)
export async function GET() {
  try {
    const registrations = await prisma.registration.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        organization: true,
        city: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return Response.json({ count: registrations.length, data: registrations });
  } catch (error) {
    console.error("[GET /api/register] Error:", error);
    return Response.json({ message: "Failed to fetch registrations" }, { status: 500 });
  }
}
