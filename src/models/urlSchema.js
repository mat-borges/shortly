import Joi from 'joi';

export const urlSchema = Joi.string().uri().required().label('url');
