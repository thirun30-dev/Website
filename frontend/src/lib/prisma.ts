import { PrismaClient } from "@/generated/prisma";

// Prevent multiple Prisma Client instances during Next.js hot-reload in development.
// In production a fresh client is created each time (single instance).

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
