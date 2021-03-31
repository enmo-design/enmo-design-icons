// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconExitOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M14.47 0c.82 0 1.51.67 1.53 1.5v13c-.02.83-.7 1.5-1.54 1.5H1.53c-.82 0-1.5-.67-1.53-1.5v-3.44a.81.81 0 011.62 0v3.44l12.82.02-.06-13.02-12.76-.02v3.46a.75.75 0 01-.42.65.89.89 0 01-.78 0A.72.72 0 010 4.94V1.5C.02.65.72 0 1.57 0zM8.3 5.12c.33-.23.8-.2 1.1.1l2.21 2.3a.71.71 0 01.12.8.65.65 0 01-.05.07l-.06.1-2.22 2.3a.83.83 0 01-.59.24h-.04a.81.81 0 01-.7-.4.7.7 0 01.13-.83l1.02-1.06H.81a.78.78 0 01-.8-.72L0 8v-.02a.77.77 0 01.83-.72h8.4L8.18 6.2a.69.69 0 01-.2-.5.69.69 0 01.31-.58z","fill-rule":"evenodd"}}]},"name":"icon-exit","theme":"outlined"};

const IconExitOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconExitOutlinedSvg
      }
    })
  }
});

export default IconExitOutlined;