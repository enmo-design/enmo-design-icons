// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconViewFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd","fill":"none"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M5.27 8.97V7.44a2.72 2.72 0 015.45 0v1.53a2.72 2.72 0 01-5.45 0M15.8 7.25a9.87 9.87 0 00-1.67-2.49A8.12 8.12 0 008 2C5.1 2 3.12 3.4 1.87 4.76A9.78 9.78 0 00.21 7.22c-.27.53-.28 1.3-.04 1.76 0 .03.52 1.3 1.7 2.58A8.1 8.1 0 008 14.24c2.92 0 4.89-1.35 6.12-2.68a9.18 9.18 0 001.69-2.54c.25-.53.23-1.32-.01-1.77","fill-rule":"nonzero","fill":"#000"}}]}]},"name":"icon-view","theme":"filled"};

const IconViewFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconViewFilledSvg
      }
    })
  }
});

export default IconViewFilled;