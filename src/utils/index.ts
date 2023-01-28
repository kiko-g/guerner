/**
 * Finds whether strings are matching depending on the strictness specified in strict variable.
 * @param str string to examine
 * @param query query to find in the string
 * @param strict whether the search should be strict or not
 * @returns
 */
export const strIncludes = (str: string, query: string, strict?: boolean) =>
  strict
    ? str.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
    : str
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/\s+/g, '')
        .replace('.', '')
        .replace(':', '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
