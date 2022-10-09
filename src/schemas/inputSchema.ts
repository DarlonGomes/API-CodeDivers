import Joi from "joi";

export const inputSchema = {
    create : Joi.object({
        input: Joi.string().required(),
        challengeId: Joi.string().required()
    }),
}