export interface MenuItem {
	id: number
	name: string
	description: string
	image: string
	price: number
	rating: number
	isVeg: boolean
	category: string
}

export interface MenuCategory {
	id: number
	name: string
	items: MenuItem[]
}

