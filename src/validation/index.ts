import joi from "joi";

export const validate = async (input: string) => {
  const schema = joi.object({
    search: joi.string().allow("").alphanum().max(30).messages({
      "string.alphanum": "Search must only contain alphanumeric characters.",
    }),
  });
  const result = schema.validate({ search: input });
  if (result.error) return result.error.details[0].message;
  return;
};
