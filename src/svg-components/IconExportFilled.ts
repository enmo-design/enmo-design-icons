// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconExportFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 16h16V0H0z"}},{"tag":"path","attrs":{"d":"M10.15 0v4.61c0 .2.08.39.21.53s.32.22.51.22h4.45v9.28c0 .75-.61 1.36-1.36 1.36H3.13c-.75 0-1.36-.6-1.36-1.36v-3H6.5l-1.26 1.32a.76.76 0 000 1.05l.02.02c.14.13.3.2.49.2h.02a.7.7 0 00.49-.22l2.5-2.6a.73.73 0 000-1.01l-2.5-2.6a.7.7 0 00-.7-.2.76.76 0 00-.32 1.24l1.26 1.32H1.77v-8.8C1.77.61 2.37 0 3.13 0h7.02zm1.44 2.55l1.28 1.32h-1.28V2.55z"}}]}]},"name":"icon-export","theme":"filled"};

const IconExportFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconExportFilledSvg
      }
    })
  }
});

export default IconExportFilled;