export const hasAllTruthyValues = (arr = []) => {
  return arr.every((value) => Boolean(value));
};

export const hasSomeTruthyValue = (arr = []) => {
  return arr.some((value) => Boolean(value));
};
