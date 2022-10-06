import Joi from "joi";

export const topicSchema = {
    create: Joi.object({
        title: Joi.string().required(),
        methodId: Joi.string().required()
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