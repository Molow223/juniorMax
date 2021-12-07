import { helper } from '@ember/component/helper';

export function getSpeakers(positional /*, named*/) {
  let [img] = positional;
  return `${img}`;
}

export default helper(getSpeakers);

