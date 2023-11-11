export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function addEnding(count: number) {
  return count !== 1 ? 's' : '';
}

export function starsLength(count: number) {
  return Math.round(count) * 2 * 10;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-Us', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}
