import Joi from "joi";

export const authSchema = {
    signUp : Joi.object({
        username: Joi.string().length(20).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        image: Joi.string().uri(),
        githubUrl: Joi.string().uri(),
        password: Joi.string().min(8).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    }),
    signIn: Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().min(8).required()
    })
}