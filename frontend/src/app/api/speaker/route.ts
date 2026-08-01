import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const proposals = await prisma.speakerProposal.findMany({
      orderBy: { createdAt: "desc" },
    });
    const confirmed = await prisma.confirmedSpeaker.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json({ success: true, proposals, confirmed });
  } catch (error) {
    console.error("[GET /api/speaker] Error:", error);
    return NextResponse.json({ message: "Error fetching speakers" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.topic?.trim()) {
      return NextResponse.json({ message: "Required fields missing" }, { status: 400 });
    }

    const proposal = await prisma.speakerProposal.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone?.trim() || null,
        company: body.company?.trim() || null,
        role: body.role?.trim() || null,
        topic: body.topic.trim(),
        abstract: body.abstract?.trim() || "Proposal submitted",
        status: body.status || "PENDING",
      },
    });

    return NextResponse.json({ success: true, data: proposal }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/speaker] Error:", error);
    return NextResponse.json({ message: "Submission failed" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, name, topic, company, role, abstract, confirmed } = body;

    if (!id) {
      return NextResponse.json({ message: "ID required" }, { status: 400 });
    }

    const updated = await prisma.speakerProposal.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(name && { name }),
        ...(topic && { topic }),
        ...(company !== undefined && { company }),
        ...(role !== undefined && { role }),
        ...(abstract && { abstract }),
        ...(confirmed !== undefined && { confirmed }),
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("[PATCH /api/speaker] Error:", error);
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

    await prisma.speakerProposal.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("[DELETE /api/speaker] Error:", error);
    return NextResponse.json({ message: "Delete failed" }, { status: 500 });
  }
}
