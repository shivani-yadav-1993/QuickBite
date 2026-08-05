import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export class ApiService {
  constructor(private readonly api: AxiosInstance) {}

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.api.get<T>(url, config)
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.api.post<T>(url, data, config)
  }

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.api.put<T>(url, data, config)
  }

  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.api.patch<T>(url, data, config)
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.api.delete<T>(url, config)
  }
}
