// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconLeftOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M12.08 14.63l-7-6.79 7-6.5A.76.76 0 0011.03.23L3.47 7.27a.76.76 0 00-.02 1.1l7.58 7.35a.76.76 0 001.05-1.09","fill-rule":"nonzero"}}]},"name":"icon-left","theme":"outlined"};

const IconLeftOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconLeftOutlinedSvg
      }
    })
  }
});

export default IconLeftOutlined;