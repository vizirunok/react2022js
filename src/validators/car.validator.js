import Joi from "joi";

const CarValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-Яа-яіІїЇєЄґҐ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки літери, не більше 20 символів та не менше 1'}),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1950).max(new Date().getFullYear()),

})

export {CarValidator};