import Joi from "joi";

const UserValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-Яа-яіІїЇєЄґҐ]{1,10}$/).required().messages({
        'string.pattern.base': 'Тільки літери, не менше 1 та не більше 10 символів'}),
    phone: Joi.string().required(),
});

export {UserValidator};

