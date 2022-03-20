export const getTrimmedValue = (value, divider = 1) =>
  (value / divider).toFixed(4).replace('.', ',')
