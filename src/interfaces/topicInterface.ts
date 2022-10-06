import { Topic, Challenge } from "@prisma/client";

export interface InsertTopic extends Omit<Topic, "id" | "created_at">{};

export interface Topic_Challenge extends Topic{
    methods: Challenge[]
}