import { Method, Topic } from "@prisma/client";

export interface InsertMethod extends Omit<Method, "id" | "created_at">{};

export interface Method_Topic extends Method{
    topics: Topic[]
}