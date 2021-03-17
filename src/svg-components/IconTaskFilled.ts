// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconTaskFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M10.99 7.5l-3.81 4.17a.7.7 0 01-1.03 0l-1.86-2.1a.7.7 0 111.03-.92l1.35 1.51 3.3-3.6a.7.7 0 011.02.94m2.9-6.78H12.5V2.8c0 .77-.62 1.39-1.38 1.4H4.16a1.4 1.4 0 01-1.38-1.4V1.42v-.7h-1.4C.62.72 0 1.34 0 2.1v12.52C0 15.38.62 16 1.38 16H13.9c.76 0 1.38-.62 1.38-1.38V2.1c0-.76-.63-1.38-1.4-1.38M11.05.47a.92.92 0 00-.8-.47H5.12a.92.92 0 00-.8.46.94.94 0 00-.13.48v.92c0 .52.41.94.93.94h5.12c.51 0 .93-.42.93-.94V.94a.93.93 0 00-.13-.47","fill-rule":"nonzero"}}]},"name":"icon-task","theme":"filled"};

const IconTaskFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconTaskFilledSvg
      }
    })
  }
});

export default IconTaskFilled;