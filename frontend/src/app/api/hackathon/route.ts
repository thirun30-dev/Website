import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const teams = await prisma.hackathonRegistration.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: teams, count: teams.length });
  } catch (error) {
    console.error("[GET /api/hackathon] Error:", error);
    return NextResponse.json({ message: "Error fetching hackathon teams" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.college?.trim() || !body.team?.trim()) {
      return NextResponse.json({ message: "Required fields missing" }, { status: 400 });
    }

    const team = await prisma.hackathonRegistration.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone?.trim() || null,
        college: body.college.trim(),
        team: body.team.trim(),
        domain: body.domain || "GenAI & Serverless",
        size: String(body.size || "4"),
        status: body.status || "APPROVED",
      },
    });

    return NextResponse.json({ success: true, data: team }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/hackathon] Error:", error);
    return NextResponse.json({ message: "Hackathon registration failed" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, name, college, team, domain, size } = body;

    if (!id) {
      return NextResponse.json({ message: "ID required" }, { status: 400 });
    }

    const updated = await prisma.hackathonRegistration.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(name && { name }),
        ...(college && { college }),
        ...(team && { team }),
        ...(domain && { domain }),
        ...(size && { size: String(size) }),
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("[PATCH /api/hackathon] Error:", error);
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

    await prisma.hackathonRegistration.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("[DELETE /api/hackathon] Error:", error);
    return NextResponse.json({ message: "Delete failed" }, { status: 500 });
  }
}
