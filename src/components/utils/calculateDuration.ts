export function calculateDuration(startDate: string) {
  const start = new Date(startDate);
  const now: Date = new Date();
  const diff = now.getTime() - start.getTime();
  const diffDate = new Date(diff);

  const years = diffDate.getFullYear() - 1970;
  const months = diffDate.getMonth();

  if (years === 0) {
    return `${months} months`;
  }
  return `${years} yr ${months} months`;
}
