import { Challenge, Input } from "@prisma/client";

export interface InsertChallenge extends Omit<Challenge, "id" | "created_at">{}

export interface Challenge_Input extends Challenge{
    inputs: Input[]
}