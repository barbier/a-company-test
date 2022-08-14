export const convertToDate = (stringDate: string) => {
  return new Date(stringDate).toLocaleDateString()
}