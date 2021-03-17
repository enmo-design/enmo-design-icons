// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconFilterFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 16h16V0H0z"}},{"tag":"path","attrs":{"d":"M10.68 8.11v6.51a1.38 1.38 0 01-2.37.96l-2.18-2.26c-.25-.25-.39-.6-.39-.95V8.12L1.2 3.74A2.18 2.18 0 012.75 0h10.5a2.18 2.18 0 011.56 3.73L10.68 8.1z"}}]}]},"name":"icon-filter","theme":"filled"};

const IconFilterFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconFilterFilledSvg
      }
    })
  }
});

export default IconFilterFilled;