export interface User {
	id: number
	firstName: string
	lastName: string
	email: string
	phone?: string
	profileImage?: string
}

export interface Address {
	id: number
	title: string
	address: string
	city: string
	state: string
	pincode: string
	latitude?: number
	longitude?: number
}

