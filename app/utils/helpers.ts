export function sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export function generateId(): string {
	return crypto.randomUUID()
}

export function isEmpty(value: unknown): boolean {
	if (value === null || value === undefined) return true

	if (typeof value === 'string') return value.trim().length === 0

	if (Array.isArray(value)) return value.length === 0

	if (typeof value === 'object') return Object.keys(value).length === 0

	return false
}

