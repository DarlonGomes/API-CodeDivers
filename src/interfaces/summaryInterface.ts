import { Method, Summary,  } from "@prisma/client";


export interface InsertSummary extends Omit<Summary, "id" | "created_at">{}

export interface Summary_Method extends Summary{
    methods: Method[]
}
