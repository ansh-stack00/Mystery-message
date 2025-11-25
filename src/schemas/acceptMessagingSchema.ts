import { z } from "zod";

export const acceptMessagingSchema = z.object({

    acceptMessage : z.boolean()
})