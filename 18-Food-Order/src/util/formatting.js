// The Intl.NumberFormat object enables language-sensitive number formatting.
export const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});
