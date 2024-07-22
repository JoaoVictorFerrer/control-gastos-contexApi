
export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR'}).format(amount)
}

export function FormatDate(dateStr: string): string {
    const dateObj = new Date(dateStr)
    const option: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Intl.DateTimeFormat('es-ES',option).format(dateObj)
}