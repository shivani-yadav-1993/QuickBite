import type { CartItem } from './cart'
import type { Address } from './user'

export interface Order {
	id: number
	items: CartItem[]
	address: Address
	totalAmount: number
	paymentMethod: string
	status: string
	createdAt: string
}

