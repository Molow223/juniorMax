import { helper } from '@ember/component/helper';

export function getMeetings(params /*, named*/) {
  let [meeting] = params;
  return `${meeting}`;
}

export default helper(getMeetings);
