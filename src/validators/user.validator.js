import Joi from "joi";

const UserValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]{1,10}$/).required().messages({
        'sting.pattern.base': 'Тільки літери, не більше 10 символів'
    }),
    phone: Joi.string().required(),
});

export {UserValidator};