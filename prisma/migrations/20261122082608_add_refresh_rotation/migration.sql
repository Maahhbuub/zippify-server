/*
  Warnings:

  - A unique constraint covering the columns `[previousRefreshToken]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "previousRefreshToken" TEXT,
ADD COLUMN     "rotatedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Session_previousRefreshToken_key" ON "Session"("previousRefreshToken");
