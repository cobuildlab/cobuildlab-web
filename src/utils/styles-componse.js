export default (...styles) => {
  let result = '';

  if (!Array.isArray(styles)) {
    throw new Error('Styles componse is not a array');
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
