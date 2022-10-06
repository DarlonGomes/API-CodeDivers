/*
  Warnings:

  - A unique constraint covering the columns `[challengeId,userId]` on the table `user_challenge` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_challenge_challengeId_userId_key" ON "user_challenge"("challengeId", "userId");
