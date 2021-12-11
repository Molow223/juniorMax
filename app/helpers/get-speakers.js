import { helper } from '@ember/component/helper';

export function getSpeakers(positional /*, named*/) {
  let [speaker] = positional;
  return `${speaker}`;
}

export default helper(getSpeakers);
