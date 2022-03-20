export const getPercent = (currentValue, prevValue) =>
  (100 - currentValue / (prevValue / 100)).toFixed(4)
