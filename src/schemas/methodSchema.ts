import Joi from "joi";

export const methodSchema = {
    create: Joi.object({
        image: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        summaryId: Joi.string().required()
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