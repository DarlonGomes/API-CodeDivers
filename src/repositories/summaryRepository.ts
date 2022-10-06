import db from "../database/prisma";
import { Summary_Method } from "../interfaces/summaryInterface";

export async function create (title: string){
    await db.summary.create({
        data:{
            title: title
        } 
    })
}

export async function gatherSummaries (){
    const summaryList : Summary_Method[] = await db.summary.findMany({
        select:{
            id: true,
            title: true,
            created_at: true,
            methods:{
                select:{
                    id: true,
                    image: true,
                    title: true,
                    description: true,
                    summaryId: true,
                    created_at: true,
                }
            }
        }
    });

    return summaryList
}

export async function search (title: string){
    const summary = await db.summary.findUnique({
        where:{
            title: title
        }
    });
    return summary
}