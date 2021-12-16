import { helper } from '@ember/component/helper';

export function getMeetings(positional /*, named*/) {
  let [meeting] = positional;
  return `${meeting}`;
}
export default helper(getMeetings);
