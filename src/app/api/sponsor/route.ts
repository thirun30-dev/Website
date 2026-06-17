import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.company?.trim() || !body.contact?.trim() || !body.email?.trim() || !body.tier) {
      return Response.json({ message: "Missing required fields" }, { status: 400 });
    }

    const enquiry = await prisma.sponsorEnquiry.create({
      data: {
        company: body.company.trim(),
        contact: body.contact.trim(),
        email: body.email.trim().toLowerCase(),
        tier: body.tier,
        message: body.message?.trim() || null,
      },
    });

    return Response.json(
      { success: true, data: enquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/sponsor] Error:", error);
    return Response.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
