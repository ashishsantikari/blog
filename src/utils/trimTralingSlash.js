export const trimTrailingSlash = (slug) => {
  if (slug.lastIndexOf('/') === slug.length - 1)
    return slug.slice(0, -1);
  return slug;
};
