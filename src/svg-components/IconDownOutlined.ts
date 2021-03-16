// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconDownOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M1.31 3.47A.76.76 0 00.21 4.5l7.04 7.57a.76.76 0 001.1.01l7.35-7.57a.76.76 0 10-1.1-1.06l-6.78 7-6.5-6.99z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-down","theme":"outlined"};

const IconDownOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconDownOutlinedSvg
      }
    })
  }
});

export default IconDownOutlined;