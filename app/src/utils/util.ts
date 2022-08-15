export const convertToDate = (stringDate: string): string => {
  return new Date(stringDate).toLocaleDateString();
};
