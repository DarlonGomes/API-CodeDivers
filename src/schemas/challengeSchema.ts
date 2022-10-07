import Joi from "joi";

export const challengeSchema = {
    create: Joi.object({
        title: Joi.string().min(1).required(),
        description: Joi.string().min(1).required(),
        code: Joi.string().min(0).required(),
        solution: Joi.string().min(1).required(),
        topicId: Joi.string().min(1).required(),
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