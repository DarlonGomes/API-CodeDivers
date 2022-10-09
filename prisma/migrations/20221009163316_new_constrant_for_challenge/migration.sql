/*
  Warnings:

  - A unique constraint covering the columns `[challengeId,id]` on the table `inputs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "inputs_challengeId_id_key" ON "inputs"("challengeId", "id");
