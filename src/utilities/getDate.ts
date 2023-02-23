export function getDate(date: Date): string {
  return date.toLocaleDateString("en-gb", {
    month: "long",
    day: "numeric",
  });
}
