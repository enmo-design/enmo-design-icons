// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconDiskFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M8.81 6.16a.83.83 0 10-1.66 0 .83.83 0 001.66 0zM2.82 0C1.9 0 1.16.75 1.16 1.66v12.66c0 .91.74 1.66 1.66 1.66h10.32c.92 0 1.67-.75 1.67-1.66V1.66C14.8.75 14.06 0 13.14 0H2.82zm5.16 1.66a4.5 4.5 0 013.07 7.78c-.45-.34-.87-.67-1.1-.91a1.83 1.83 0 00-2.99 2 4.5 4.5 0 011.02-8.87zM2.82 13.48a.83.83 0 111.67 0 .83.83 0 01-1.67 0zm5.48-4c.2-.2.52-.2.72 0 .12.11 3.4 2.42 3.77 2.8a1.2 1.2 0 01-1.69 1.69c-.4-.4-2.7-3.67-2.8-3.77a.51.51 0 010-.73z","fill-rule":"nonzero"}}]}]},"name":"icon-disk","theme":"filled"};

const IconDiskFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconDiskFilledSvg
      }
    })
  }
});

export default IconDiskFilled;