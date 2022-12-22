import Joi from 'joi';

export const signUpSchema = Joi.object({
  name: Joi.string().required().label(`Name`),
  email: Joi.string().email().required().label(`Email`),
  password: Joi.string()
    .min(8)
    .pattern(/^([a-zA-Z0-9@*#!.,$%]{8,})$/)
    .label('Password')
    .required(),
});

export const signInSchema = Joi.object({
  email: Joi.string().required().label(`Email`),
  password: Joi.string().required().label(`Password`),
});
