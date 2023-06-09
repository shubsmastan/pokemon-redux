import joi from "joi";

export const validate = async (input: string) => {
  const schema = joi.object({
    search: joi.string().allow("").alphanum().max(30).messages({
      "string.alphanum": "Search must only contain alphanumeric characters.",
    }),
  });
  try {
    await schema.validateAsync({ search: input });
    return null;
  } catch (err: any) {
    return err.details[0].message;
  }
};
