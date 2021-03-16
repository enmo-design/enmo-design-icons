// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconCopyFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd","fill":"none"},"children":[{"tag":"path","attrs":{"d":"M0 16h16V0H0z"}},{"tag":"path","attrs":{"d":"M3.3 2.08V12.6a2.28 2.28 0 002.27 2.28h6.16c-.1.63-.64 1.12-1.3 1.12H1.69c-.73 0-1.32-.59-1.32-1.32V3.4c0-.73.6-1.32 1.32-1.32h1.6zM10.71 0v3.57c0 .67.54 1.2 1.2 1.2h3.7v7.85c0 .72-.58 1.3-1.3 1.3H5.56a1.3 1.3 0 01-1.3-1.3V1.3c0-.72.58-1.3 1.3-1.3h5.16zm1.5 9.12H7.65a.7.7 0 00-.7.7c0 .4.32.71.7.71h4.55a.7.7 0 00.7-.7.7.7 0 00-.7-.71zm0-2.4H7.65a.7.7 0 00-.7.71c0 .39.32.7.7.7h4.55a.7.7 0 00.7-.7.7.7 0 00-.7-.7zm-.28-5.15l1.98 1.99h-1.98V1.57z","fill":"#000"}}]}]},"name":"icon-copy","theme":"filled"};

const IconCopyFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconCopyFilledSvg
      }
    })
  }
});

export default IconCopyFilled;