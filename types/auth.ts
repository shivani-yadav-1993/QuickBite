import type { User } from './user'

export interface LoginPayload {
	email: string
	password: string
}

export interface SignupPayload {
	firstName: string
	lastName: string
	email: string
	password: string
}

export interface AuthResponse {
	accessToken: string
	refreshToken?: string
	user: User
}

