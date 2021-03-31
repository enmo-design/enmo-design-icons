// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconCaretDownOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M16 3H0l8 10.26z","fill-rule":"nonzero"}}]},"name":"icon-caret-down","theme":"outlined"};

const IconCaretDownOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconCaretDownOutlinedSvg
      }
    })
  }
});

export default IconCaretDownOutlined;