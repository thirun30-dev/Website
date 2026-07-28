import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic server-side validation
    if (!body.name?.trim() || !body.email?.trim() || !body.college?.trim() || !body.team?.trim() || !body.domain || !body.size) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    const email = body.email.trim().toLowerCase();

    // Verify that the user has already registered for the main event
    const mainRegistration = await prisma.registration.findUnique({
      where: { email },
    });

    if (!mainRegistration) {
      return Response.json({ message: "You must register for the main event first to participate in the hackathon." }, { status: 403 });
    }

    // Verify user hasn't already registered for the hackathon
    const existingHackathonReg = await prisma.hackathonRegistration.findFirst({
      where: { email },
    });

    if (existingHackathonReg) {
      return Response.json({ message: "You have already joined or created a team for the hackathon." }, { status: 409 });
    }

    // Verify team name uniqueness if creating a team
    if (body.isCreating && body.teamName) {
      const existingTeam = await prisma.hackathonRegistration.findFirst({
        where: {
          team: {
            startsWith: `${body.teamName.trim()} (ID:`
          }
        }
      });

      if (existingTeam) {
        return Response.json({ message: "A team with this name already exists. Please choose a different name." }, { status: 409 });
      }
    }

    const registration = await prisma.hackathonRegistration.create({
      data: {
        name: body.name.trim(),
        email,
        college: body.college.trim(),
        team: body.team.trim(),
        domain: body.domain,
        size: body.size,
      },
    });

    return Response.json(
      { success: true, data: registration },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/hackathon] Error:", error);
    return Response.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
