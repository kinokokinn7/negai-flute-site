/** Join an Astro base path and a site-relative path without losing a repository prefix.
 * @param {string} base
 * @param {string} [path]
 * @returns {string}
 */
export function sitePath(base, path = '') {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
