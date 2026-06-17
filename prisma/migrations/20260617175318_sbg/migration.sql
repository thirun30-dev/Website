/*
  Warnings:

  - Added the required column `address` to the `registrations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNumber` to the `sponsor_enquiries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "registrations" ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sponsor_enquiries" ADD COLUMN     "alternateNumber" TEXT,
ADD COLUMN     "contactNumber" TEXT NOT NULL;
