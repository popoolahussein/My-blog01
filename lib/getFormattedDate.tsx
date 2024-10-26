export default function getFormattedDate(dateStrng: string): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateStrng))
}