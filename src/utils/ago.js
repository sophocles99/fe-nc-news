const ago = (date) => {
  const secondsAgo = Math.floor((new Date() - date) / 1000);
  const timeUnits = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };
  for (const [unit, unitSeconds] of Object.entries(timeUnits)) {
    const unitCount = Math.floor(secondsAgo / unitSeconds);
    if (unitCount > 0) {
      return `${unitCount} ${unit + (unitCount > 1 ? "s" : "")} ago`;
    }
  }
  return "0 minutes ago";
};

export default ago;
