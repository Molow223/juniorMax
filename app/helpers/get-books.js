import { helper } from '@ember/component/helper';

export function getBooks(positional /*, named*/) {
  let [info] = positional;
  return `${info} `;
}

export default helper(getBooks);
