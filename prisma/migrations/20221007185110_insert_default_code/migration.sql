/*
  Warnings:

  - Added the required column `code` to the `challenges` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "challenges" ADD COLUMN     "code" TEXT NOT NULL;
