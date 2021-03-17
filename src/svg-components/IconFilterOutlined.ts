// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconFilterOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 16h16V0H0z"}},{"tag":"path","attrs":{"d":"M15.7 1.35A2.18 2.18 0 0013.7 0H3.19a2.18 2.18 0 00-1.55 3.74l4.54 4.38v4.25c0 .36.14.7.39.95l2.18 2.26a1.38 1.38 0 002.37-.96v-6.5L12.6 6.5a.75.75 0 00-1.08-1.03l-1.9 1.99v6.85l-1.94-2V7.48L2.7 2.68a.68.68 0 01-.14-.76c.11-.26.36-.42.64-.42h10.5a.7.7 0 01.7.7c-.01.18-.08.35-.22.48l-.94 1a.75.75 0 001.09 1.02l.92-.97c.63-.63.8-1.56.47-2.38"}}]}]},"name":"icon-filter","theme":"outlined"};

const IconFilterOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconFilterOutlinedSvg
      }
    })
  }
});

export default IconFilterOutlined;