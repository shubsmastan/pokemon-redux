import joi from "joi";

export const validate = async (input, filter) => {
  const schema = joi.object({
    search: joi.string().allow("").alphanum().max(30),
  });
  try {
    await schema.validateAsync({ search: input });
    return null;
  } catch (err) {
    return err.details[0].message;
  }
};
