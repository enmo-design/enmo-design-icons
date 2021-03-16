// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconSearchFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M14.83 14.84l-3.05-3.11a7.03 7.03 0 00-.13-9.69 6.75 6.75 0 00-9.65 0 7.03 7.03 0 000 9.84 6.75 6.75 0 008.74.76l3.12 3.19c.27.24.68.23.94-.03a.7.7 0 00.03-.96","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-search","theme":"filled"};

const IconSearchFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconSearchFilledSvg
      }
    })
  }
});

export default IconSearchFilled;