import type { MenuItem } from './menu'

export interface CartItem {
	id: number
	quantity: number
	item: MenuItem
}

export interface Cart {
	items: CartItem[]
	totalAmount: number
	totalItems: number
}

