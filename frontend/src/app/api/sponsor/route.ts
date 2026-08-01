import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const enquiries = await prisma.sponsorEnquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    const confirmed = await prisma.confirmedSponsor.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json({ success: true, enquiries, confirmed });
  } catch (error) {
    console.error("[GET /api/sponsor] Error:", error);
    return NextResponse.json({ message: "Error fetching sponsors" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.company?.trim() || !body.contact?.trim() || !body.email?.trim()) {
      return NextResponse.json({ message: "Required fields missing" }, { status: 400 });
    }

    const enquiry = await prisma.sponsorEnquiry.create({
      data: {
        company: body.company.trim(),
        contact: body.contact.trim(),
        contactNumber: body.contactNumber?.trim() || body.phone?.trim() || null,
        alternateNumber: body.alternateNumber?.trim() || null,
        email: body.email.trim().toLowerCase(),
        tier: body.tier || "COMMUNITY",
        message: body.message?.trim() || null,
        status: body.status || "PENDING",
      },
    });

    return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/sponsor] Error:", error);
    return NextResponse.json({ message: "Submission failed" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, company, contact, tier, message, confirmed } = body;

    if (!id) {
      return NextResponse.json({ message: "ID required" }, { status: 400 });
    }

    const updated = await prisma.sponsorEnquiry.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(company && { company }),
        ...(contact && { contact }),
        ...(tier && { tier }),
        ...(message !== undefined && { message }),
        ...(confirmed !== undefined && { confirmed }),
        ...((body.logoUrl !== undefined || body.logo !== undefined) && { logoUrl: body.logoUrl || body.logo }),
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("[PATCH /api/sponsor] Error:", error);
    return NextResponse.json({ message: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID required" }, { status: 400 });
    }

    await prisma.sponsorEnquiry.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("[DELETE /api/sponsor] Error:", error);
    return NextResponse.json({ message: "Delete failed" }, { status: 500 });
  }
}
