// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconFormatFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M1.18 15.98h1s1.17-.21 2.07-2.56l1.94 2.56h1.72l.7-1.33.66 1.33h5.91V9.14h-14v6.84zM9.92 5.7V0H6.47v5.71H1.14V8H15.2V5.71L9.92 5.7z","fill-rule":"nonzero"}}]},"name":"icon-format","theme":"filled"};

const IconFormatFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconFormatFilledSvg
      }
    })
  }
});

export default IconFormatFilled;