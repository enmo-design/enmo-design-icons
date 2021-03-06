// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconVerifyOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd","fill":"none"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M6.16 14a1.2 1.2 0 01-.87-.35L.36 8.75a1.21 1.21 0 010-1.72 1.24 1.24 0 011.74 0l4.06 4.02 7.74-7.68a1.22 1.22 0 011.74 0c.48.47.48 1.24 0 1.72l-8.61 8.56a1.2 1.2 0 01-.87.35z","fill-rule":"nonzero","fill":"#000"}}]}]},"name":"icon-verify","theme":"outlined"};

const IconVerifyOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconVerifyOutlinedSvg
      }
    })
  }
});

export default IconVerifyOutlined;