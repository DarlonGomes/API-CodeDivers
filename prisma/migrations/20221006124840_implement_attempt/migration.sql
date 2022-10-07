/*
  Warnings:

  - Added the required column `attempt` to the `user_challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_challenge" ADD COLUMN     "attempt" TEXT NOT NULL,
ALTER COLUMN "isSolved" SET DEFAULT false;
