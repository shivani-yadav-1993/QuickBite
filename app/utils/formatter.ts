export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'INR',
		maximumFractionDigits: 0
	}).format(amount)
}

export function formatDate(date: string | Date): string {
	return new Intl.DateTimeFormat('en-IN', {
		dateStyle: 'medium'
	}).format(new Date(date))
}

export function capitalize(value: string): string {
	if (!value) return ''

	return value.charAt(0).toUpperCase() + value.slice(1)
}

