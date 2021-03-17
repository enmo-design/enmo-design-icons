// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconBreakOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M13.7 13.58l-.12.12a1.03 1.03 0 01-1.46 0L8 9.58 3.88 13.7a1.03 1.03 0 01-1.46 0l-.12-.12c-.4-.4-.4-1.06 0-1.46L6.42 8 2.3 3.88c-.4-.4-.4-1.05 0-1.46l.12-.12a1.03 1.03 0 011.46 0L9.58 8l4.12 4.12a1.03 1.03 0 010 1.46zM12.12 2.3a1.03 1.03 0 011.46 0l.12.12a1.03 1.03 0 010 1.46L9.58 8 8 6.42l4.12-4.12z","fill-rule":"nonzero"}}]}]},"name":"icon-break","theme":"outlined"};

const IconBreakOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconBreakOutlinedSvg
      }
    })
  }
});

export default IconBreakOutlined;