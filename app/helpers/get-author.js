import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getAuthor(positional /*, named*/) {
  let [firstName, lastName] = positional;
  return `${lastName} ${firstName}`;
}

export default helper(getAuthor);
