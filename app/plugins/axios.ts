import axios from 'axios'

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()

	const api = axios.create({
		baseURL: config.public.apiBaseUrl,
		timeout: 30000,
		headers: {
			'Content-Type': 'application/json'
		}
	})

	api.interceptors.request.use((request) => {
		// Authentication token will be added here later
		return request
	})

	api.interceptors.response.use(
		(response) => response,
		(error) => Promise.reject(error)
	)

	return {
		provide: {
			api
		}
	}
})

