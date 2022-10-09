import Joi from "joi";

export const inputSchema = {
    create : Joi.object({
        input: Joi.string().required(),
        output: Joi.string().required(),
        challengeId: Joi.string().required()
    }),
    update: Joi.object({
        field: Joi.string().required(),
        value: Joi.string().required(),
        inputId: Joi.string().required()
    })
}