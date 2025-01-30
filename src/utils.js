export const isValidTask = (value) => {
  return value.trim() !== "" && value.trim().length >= 5;
};
