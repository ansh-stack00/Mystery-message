import { z } from "zod";

export const verifySchema = z.object({

    content : z
    .string()
    .min(10 , {message : "message should be 10 characters long"})
    .max(500 , {message : "constent should not be more than 500 characters"})
})