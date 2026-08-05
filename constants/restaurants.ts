import pizzaPalace from '~/assets/images/restaurants/pizza-palace.jpg'
import burgerHub from '~/assets/images/restaurants/burger-hub.jpg'
import biryaniHouse from '~/assets/images/restaurants/biryani-house.jpg'
import chineseWok from '~/assets/images/restaurants/chinese-wok.jpg'
import cafeMocha from '~/assets/images/restaurants/cafe-mocha.jpg'
import healthyBowl from '~/assets/images/restaurants/healthy-bowl.jpg'

export interface Restaurant {
  id: number
  name: string
  image: string
  cuisine: string
  rating: number
  deliveryTime: string
  priceForTwo: string
  isVeg?: boolean
  promoted?: boolean
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Pizza Palace',
    image: pizzaPalace,
    cuisine: 'Italian, Pizza',
    rating: 4.8,
    deliveryTime: '25 mins',
    priceForTwo: '₹500 for two',
    isVeg: true,
    promoted: true
  },
  {
    id: 2,
    name: 'Burger Hub',
    image: burgerHub,
    cuisine: 'American, Burgers',
    rating: 4.6,
    deliveryTime: '20 mins',
    priceForTwo: '₹450 for two'
  },
  {
    id: 3,
    name: 'Biryani House',
    image: biryaniHouse,
    cuisine: 'Hyderabadi',
    rating: 4.9,
    deliveryTime: '30 mins',
    priceForTwo: '₹650 for two'
  },
  {
    id: 4,
    name: 'Chinese Wok',
    image: chineseWok,
    cuisine: 'Chinese',
    rating: 4.5,
    deliveryTime: '28 mins',
    priceForTwo: '₹550 for two'
  },
  {
    id: 5,
    name: 'Cafe Mocha',
    image: cafeMocha,
    cuisine: 'Cafe',
    rating: 4.7,
    deliveryTime: '18 mins',
    priceForTwo: '₹700 for two'
  },
  {
    id: 6,
    name: 'Healthy Bowl',
    image: healthyBowl,
    cuisine: 'Healthy',
    rating: 4.8,
    deliveryTime: '22 mins',
    priceForTwo: '₹600 for two',
    isVeg: true
  }
]