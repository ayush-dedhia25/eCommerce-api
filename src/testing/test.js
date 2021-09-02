const Joi = require('joi');

const Schema = Joi.object().keys({
   email: Joi
            .string()
            .email()
            .required(),
   
   phone: Joi
            .string()
            .regex(/^\d{3}-\d{3}-\d{4}$/)
            .required(),
   
   dob: Joi
         .date()
         .min('1-1-2002')
         .iso()
});

const data = {
   email: 'ayushdedhia25@gmail.com',
   phone: '900-490',
   dob: '2002-08-29'
};

const validation = Schema.validate(data);
validation.error.details.forEach(path => {
   console.log(path.message);
});