export const capitializeFirstLetter = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toPhoneNumber = (str: string): string => {
  const modText = str.replace(/\D/g, "");
  return modText.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};
