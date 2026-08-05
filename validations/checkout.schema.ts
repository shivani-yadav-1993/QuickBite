import { z } from 'zod'

export const checkoutSchema = z.object({
  address: z
    .string()
    .min(10, 'Address is required'),

  city: z
    .string()
    .min(2),

  state: z
    .string()
    .min(2),

  pincode: z
    .string()
    .regex(/^[0-9]{6}$/),

  paymentMethod: z.enum([
    'COD',
    'UPI',
    'CARD'
  ])
})

export type CheckoutSchema = z.infer<
  typeof checkoutSchema
>
