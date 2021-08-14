/* It will be used by index.js and slug.js page */
export const getFormattedDate = (milliseconds) => {
    const formatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    };
    const date = new Date(milliseconds);
    return date.toLocaleDateString(undefined, formatOptions);
  };
  