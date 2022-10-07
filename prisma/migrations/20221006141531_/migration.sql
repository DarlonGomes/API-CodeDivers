/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `methods` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `summary` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "methods_title_key" ON "methods"("title");

-- CreateIndex
CREATE UNIQUE INDEX "summary_title_key" ON "summary"("title");
