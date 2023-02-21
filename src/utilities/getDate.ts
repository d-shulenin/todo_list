export function getDate(): string {
  return new Date().toLocaleDateString("en-gb", {
    month: "long",
    day: "numeric",
  });
}
