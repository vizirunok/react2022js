import Joi from "joi";

const joiValidator = Joi.object({
    login: Joi.string().regex(/^[a-zA-Zа-яА-ЯїЇіІєЄґҐ] {0,20}$/).required().messages({
        'string.pattern.base': 'Тільки літери, не більше 20 символів'
    }),
    password: Joi.string().required()
});

export {joiValidator};