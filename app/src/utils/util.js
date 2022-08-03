export const convertToDate = stringDate => {
  if (typeof stringDate !== 'string') {
    return false
  }
  return new Date(stringDate).toLocaleDateString()
}