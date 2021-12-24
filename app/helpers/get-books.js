import { helper } from '@ember/component/helper';

export function getBooks(params /*, named*/) {
  let [book] = params;
  return `${book}`;
}

export default helper(getBooks);
