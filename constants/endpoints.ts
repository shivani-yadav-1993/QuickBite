export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    CURRENT_USER: '/auth/me'
  },

  USERS: {
    LIST: '/users',
    DETAILS: (id: number) => `/users/${id}`
  },

  RESTAURANTS: {
    LIST: '/products',
    DETAILS: (id: number) => `/products/${id}`,
    SEARCH: '/products/search',
    CATEGORIES: '/products/categories'
  },

  CART: {
    LIST: '/carts',
    DETAILS: (id: number) => `/carts/${id}`
  }
}
