/*
  Warnings:

  - You are about to drop the `userChallenge` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userChallenge" DROP CONSTRAINT "userChallenge_challengeId_fkey";

-- DropForeignKey
ALTER TABLE "userChallenge" DROP CONSTRAINT "userChallenge_userId_fkey";

-- DropTable
DROP TABLE "userChallenge";

-- CreateTable
CREATE TABLE "user_challenge" (
    "id" TEXT NOT NULL,
    "isSolved" BOOLEAN NOT NULL,
    "challengeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_challenge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_challenge" ADD CONSTRAINT "user_challenge_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_challenge" ADD CONSTRAINT "user_challenge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
