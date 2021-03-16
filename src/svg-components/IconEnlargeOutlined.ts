// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconEnlargeOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M15.94 11.6v4.34H11.6V14.5h2.9v-2.9h1.45zM4.9 10.01l1.02 1.02-3.45 3.45H5.8v1.45H0v-5.8h1.45v3.33l3.45-3.45zM15.94 0v5.8H14.5V2.47l-3.45 3.45-1.02-1.02 3.45-3.45h-3.33V0h5.8zM4.34 0v1.45h-2.9v2.9H0V0h4.35z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-enlarge","theme":"outlined"};

const IconEnlargeOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconEnlargeOutlinedSvg
      }
    })
  }
});

export default IconEnlargeOutlined;