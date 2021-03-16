// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconNarrowOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M11.6 15.94V11.6h4.34v1.45h-2.9v2.9H11.6zm-10.58 0L0 14.92l3.45-3.45H.12v-1.45h5.8v5.8H4.47v-3.33l-3.45 3.45zm9-10.02V.12h1.45v3.33L14.92 0l1.02 1.02-3.45 3.45h3.33v1.45h-5.8zM0 4.35V2.9h2.9V0h1.45v4.35H0z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-narrow","theme":"outlined"};

const IconNarrowOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconNarrowOutlinedSvg
      }
    })
  }
});

export default IconNarrowOutlined;