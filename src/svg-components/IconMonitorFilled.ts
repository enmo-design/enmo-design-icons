// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMonitorFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M13.06 12.02l1.19 2.47c.13.27.09.6-.1.82-.38.48-1.22.69-1.89.69H3.73c-.78 0-1.5-.25-1.84-.65a.79.79 0 01-.16-.82l.01-.04 1.2-2.47A7.93 7.93 0 008 13.78c1.96 0 3.75-.67 5.06-1.76zM8 0c3.87 0 7 2.96 7 6.6 0 3.65-3.13 6.61-7 6.61s-7-2.96-7-6.6C1 2.95 4.13 0 8 0zm0 11.56c2.2 0 3.98-1.69 3.98-3.76 0-2.08-1.78-3.76-3.98-3.76S4.02 5.72 4.02 7.8c0 2.07 1.78 3.76 3.98 3.76zm0-5.73c1.2 0 2.17.92 2.17 2.05S9.2 9.93 8 9.93 5.83 9 5.83 7.88 6.8 5.83 8 5.83z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-monitor","theme":"filled"};

const IconMonitorFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMonitorFilledSvg
      }
    })
  }
});

export default IconMonitorFilled;