import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
})

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(3, 'Full name is required'),

    email: z
      .string()
      .email('Please enter a valid email address'),

    phone: z
      .string()
      .regex(/^[0-9]{10}$/, 'Enter a valid mobile number'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters'),

    confirmPassword: z.string()
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: 'Passwords do not match',
      path: ['confirmPassword']
    }
  )

export type LoginSchema = z.infer<typeof loginSchema>

export type SignupSchema = z.infer<typeof signupSchema>
