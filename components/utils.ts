export const parseDate = (value: string | undefined): string | undefined => {
  if (value) {
    const dateString = new Date(value).toDateString();

    const noDayDateString = dateString
      .split(' ')
      .slice(1)
      .join(' ');

    return noDayDateString;
  };
};
