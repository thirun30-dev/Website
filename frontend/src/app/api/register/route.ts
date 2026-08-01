import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.fullName || body.name;
    const email = body.email ? body.email.trim().toLowerCase() : "";
    const phone = body.phone || "";
    const organization = body.organization || body.college || "";
    const designation = body.designation || body.year || "";
    const city = body.city || "Chennai";
    const avatar = body.avatar || "man";

    if (!name || !email) {
      return NextResponse.json({ message: "Name and Email are required" }, { status: 400 });
    }

    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name,
          email,
          phone,
          organization,
          designation,
          city,
          avatar,
          role: "PARTICIPANT",
        },
      });
    }

    const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
    const registrationCode = `AWSCD2026-${randomSuffix}`;
    const qrToken = `TOKEN-${Math.random().toString(36).substring(2, 15)}`;

    const registration = await prisma.registration.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        registrationCode,
        qrToken,
        emailStatus: "PENDING",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: registration.id,
          registrationCode: registration.registrationCode,
          user,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/register] Error:", error);
    return NextResponse.json({ message: "Registration failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      where: { role: "PARTICIPANT", deletedAt: null },
      include: { registration: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, count: users.length, data: users });
  } catch (error) {
    console.error("[GET /api/register] Error:", error);
    return NextResponse.json({ message: "Error fetching registrations" }, { status: 500 });
  }
}
