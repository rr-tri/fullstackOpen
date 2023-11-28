export const convertToK = (value) => {
  if (value >= 1000) {
    const result = value / 1000;
    return result.toFixed(1) + "k";
  }
  return value;
};
