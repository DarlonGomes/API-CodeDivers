/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `topics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "topics_title_key" ON "topics"("title");
