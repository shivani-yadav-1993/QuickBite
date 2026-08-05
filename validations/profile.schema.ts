import { z } from 'zod'

export const profileSchema = z.object({
  fullName: z
    .string()
    .min(3),

  email: z
    .string()
    .email(),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/)
})

export type ProfileSchema = z.infer<
  typeof profileSchema
>
