import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.topic?.trim() || !body.abstract?.trim()) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    const proposal = await prisma.speakerProposal.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        topic: body.topic.trim(),
        abstract: body.abstract.trim(),
      },
    });

    return Response.json(
      { success: true, data: proposal },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/speaker] Error:", error);
    return Response.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
