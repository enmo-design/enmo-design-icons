// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconExitFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 16h16V0H0z"}},{"tag":"path","attrs":{"d":"M14.47 0H1.57C.72 0 .02.65 0 1.5V7h8.26L6.85 5.52A.95.95 0 017 4.06a1.17 1.17 0 011.5.11l3.04 3.16c.15.16.25.36.27.58.01.2-.02.37-.1.53l-.08.1-.08.13-3.05 3.15c-.21.22-.5.34-.8.34h-.06c-.38 0-.75-.21-.95-.56a.95.95 0 01.16-1.13l1.4-1.45H0v5.48c.02.83.7 1.5 1.53 1.5h12.93c.83 0 1.52-.67 1.54-1.5v-13C15.98.67 15.3 0 14.47 0"}}]}]},"name":"icon-exit","theme":"filled"};

const IconExitFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconExitFilledSvg
      }
    })
  }
});

export default IconExitFilled;