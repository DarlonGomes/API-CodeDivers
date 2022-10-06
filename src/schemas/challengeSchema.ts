import Joi from "joi";

export const challengeSchema = {
    create: Joi.object({
        title: Joi.string().required()
    }),
    search: Joi.object({
        field: Joi.string().required(),
        value: Joi.string().required()
    }),
    delete: Joi.object({
        field: Joi.string().required(),
        value: Joi.string().required()
    })
}