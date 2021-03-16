// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconDoubtFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8.67 9.45v.32a.67.67 0 11-1.34 0V9c0-.31.22-.56.5-.63 1.5-.63 1.5-1.56 1.5-1.6V5.75c0-.6-.6-1.08-1.33-1.08-.74 0-1.33.48-1.33 1.08v.32a.67.67 0 11-1.34 0v-.32c0-1.33 1.2-2.42 2.67-2.42s2.67 1.09 2.67 2.42v.99c0 .02.1 1.68-2 2.71M8 12.67a.67.67 0 110-1.34.67.67 0 010 1.34M8 0a8.01 8.01 0 000 16A8 8 0 008 0","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-doubt","theme":"filled"};

const IconDoubtFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconDoubtFilledSvg
      }
    })
  }
});

export default IconDoubtFilled;