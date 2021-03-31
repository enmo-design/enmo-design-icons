// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconCheckOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M6.16 14a1.2 1.2 0 01-.87-.35L.36 8.75a1.21 1.21 0 010-1.72 1.24 1.24 0 011.74 0l4.06 4.02 7.74-7.68a1.22 1.22 0 011.74 0c.48.47.48 1.24 0 1.72l-8.61 8.56a1.2 1.2 0 01-.87.35z","fill-rule":"nonzero"}}]},"name":"icon-check","theme":"outlined"};

const IconCheckOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconCheckOutlinedSvg
      }
    })
  }
});

export default IconCheckOutlined;