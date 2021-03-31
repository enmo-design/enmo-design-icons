// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconEditFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M15.5 4.23L11.69.43a1.38 1.38 0 00-1.95 0L8.29 1.88l.96.96h.02l3.81 3.8.65.66.32.32 1.44-1.44c.54-.54.54-1.4 0-1.95M3.59 14.83l-.3-.29-1.9-1.9-.3-.31-.88-.94-.2-.21v3.36c0 .76.62 1.38 1.37 1.38H4.7l-.26-.24-.86-.84zM8.3 3.82l-.98-.97-6.9 6.9.98.98 3.8 3.8.98.97 6.87-6.87-.95-1-3.8-3.8z","fill-rule":"nonzero"}}]},"name":"icon-edit","theme":"filled"};

const IconEditFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconEditFilledSvg
      }
    })
  }
});

export default IconEditFilled;