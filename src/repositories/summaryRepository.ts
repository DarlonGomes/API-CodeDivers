import db from "../database/prisma";
import { InsertSummary, Summary_Method } from "../interfaces/summaryInterface";

export async function create (summary: InsertSummary){
    await db.summary.create({
        data: summary
    })
}

export async function gatherSummaries (){
    const summaryList : Summary_Method[] = await db.summary.findMany({
        select:{
            id: true,
            title: true,
            created_at: true,
            methods:{
                include:{
                }
            }
        }
    });

    return summaryList
}

