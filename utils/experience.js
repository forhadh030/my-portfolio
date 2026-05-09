export const getExperienceYears = (startDate, today = new Date()) => {
  const start = new Date(startDate);

  if (Number.isNaN(start.getTime()) || start > today) {
    return 0;
  }

  let years = today.getFullYear() - start.getFullYear();
  const hasNotReachedAnniversary =
    today.getMonth() < start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() < start.getDate());

  if (hasNotReachedAnniversary) {
    years -= 1;
  }

  return Math.max(0, years);
};

export const formatExperienceYears = (startDate, today = new Date()) =>
  `${getExperienceYears(startDate, today)}+`;
