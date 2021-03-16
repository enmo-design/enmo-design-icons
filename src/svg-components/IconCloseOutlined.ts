// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconCloseOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd","fill":"none"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M7.97 6.33l-6-6A1.16 1.16 0 00.35 1.98l6 6-6 5.99a1.16 1.16 0 101.64 1.63L7.97 9.6l5.99 5.99a1.16 1.16 0 101.63-1.63l-5.99-6 6-5.99A1.16 1.16 0 0013.95.34l-6 5.99z","fill-rule":"nonzero","fill":"#000"}}]}]},"name":"icon-close","theme":"outlined"};

const IconCloseOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconCloseOutlinedSvg
      }
    })
  }
});

export default IconCloseOutlined;