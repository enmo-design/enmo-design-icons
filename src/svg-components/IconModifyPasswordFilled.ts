// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconModifyPasswordFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8.33 12.5a.7.7 0 01-1.39 0V9.72a.7.7 0 011.4 0v2.78zm5.56-6.25H5.1V4.09a2.7 2.7 0 015.4 0 .7.7 0 001.39 0 4.1 4.1 0 00-8.18 0v2.16H1.38C.62 6.25 0 6.87 0 7.64v6.94c0 .77.62 1.39 1.38 1.4H13.9c.77-.01 1.39-.63 1.39-1.4V7.64c0-.77-.62-1.39-1.39-1.39z","fill-rule":"nonzero"}}]},"name":"icon-modify-password","theme":"filled"};

const IconModifyPasswordFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconModifyPasswordFilledSvg
      }
    })
  }
});

export default IconModifyPasswordFilled;