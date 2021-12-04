import { helper } from '@ember/component/helper';

export function getAuthor(positional /*, named*/) {
  let [firstName, lastName] = positional;
  return `${lastName} ${firstName}`;
}

export default helper(getAuthor);
