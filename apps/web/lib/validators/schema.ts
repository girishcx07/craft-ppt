// src/lib/validators/presentation/schema.ts

import { z } from "zod";
import { slugify } from "../utils";

export const presentationSchema = z.object({
  name: z.string()
    .min(2, { message: "Presentation name must be at least 2 characters." })
    .max(100, { message: "Presentation name must not exceed 100 characters." })
    .refine((val) => !!slugify(val), {
      message: "Presentation name must contain at least one alphanumeric character.",
    }),
}).transform((data) => ({
  ...data,
  slug: slugify(data.name),
}));
