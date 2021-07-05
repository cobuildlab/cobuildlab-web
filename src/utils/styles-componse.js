/**.
 * Compose an array of styles
 *
 * @returns {function(...[*]=): string} - the returning compositor
 */
function compose() {
  return (...styles) => {
    let result = '';

    if (!Array.isArray(styles)) {
      throw new Error('Styles compose is not a array');
    }

    styles.forEach((e) => {
      if (typeof e === 'string') {
        result += ' ' + e;
      } else {
        console.warn('Styles must be a string');
      }
    });

    return result;
  };
}

export default compose();
