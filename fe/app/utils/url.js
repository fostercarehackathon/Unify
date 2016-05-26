export function getImageUrl(imageImportUrl) {
  return imageImportUrl.startsWith('/')
    ? imageImportUrl
    : `/${imageImportUrl}`;
}
