export interface Category {
  id: number
  name: string
  icon: string
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Pizza',
    icon: 'twemoji:pizza'
  },
  {
    id: 2,
    name: 'Burger',
    icon: 'twemoji:hamburger'
  },
  {
    id: 3,
    name: 'Biryani',
    icon: 'mdi:rice'
  },
  {
    id: 4,
    name: 'Chinese',
    icon: 'twemoji:steaming-bowl'
  },
  {
    id: 5,
    name: 'Desserts',
    icon: 'twemoji:doughnut'
  },
  {
    id: 6,
    name: 'Drinks',
    icon: 'twemoji:cup-with-straw'
  },
  {
    id: 7,
    name: 'Healthy',
    icon: 'mdi:food-apple'
  },
  {
    id: 8,
    name: 'South Indian',
    icon: 'mdi:food'
  }
]