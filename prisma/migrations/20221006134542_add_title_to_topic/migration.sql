/*
  Warnings:

  - Added the required column `title` to the `topics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "topics" ADD COLUMN     "title" TEXT NOT NULL;
