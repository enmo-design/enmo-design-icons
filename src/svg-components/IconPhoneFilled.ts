// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconPhoneFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M6.1 5.08c.62-.6.7-1.56.12-2.24L4.47.63A1.7 1.7 0 002.1.36c-.04.08-.12.08-.12.12L.47 2c-1.45 1.45.6 5.4 4.38 9.17 3.77 3.77 7.66 5.79 9.11 4.38l1.53-1.52c.68-.69.68-1.75 0-2.36l-.12-.12-2.21-1.75a1.65 1.65 0 00-2.25.12l-.95.95A13.49 13.49 0 015.19 6.1l.92-1.03z","fill-rule":"nonzero"}}]}]},"name":"icon-phone","theme":"filled"};

const IconPhoneFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconPhoneFilledSvg
      }
    })
  }
});

export default IconPhoneFilled;