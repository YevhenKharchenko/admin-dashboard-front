export const capitalizeFirstLetter = name => {
  if (!name || typeof name !== 'string') return name;

  return name.charAt(0).toUpperCase() + name.slice(1);
};
