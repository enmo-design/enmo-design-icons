// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconDeleteFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M15.22 2.9h-2.9V.97c0-.47-.38-.97-1.45-.97h-5.8C4 0 3.62.5 3.62.97V2.9H.72a.72.72 0 100 1.45h14.5a.72.72 0 100-1.45zM5.07 6.52a.72.72 0 011.45 0v4.77a.72.72 0 11-1.45 0V6.52zm4.35 0a.72.72 0 111.45 0v4.77a.72.72 0 11-1.45 0V6.52zm.72-1.07H1.45v9.04c0 .47.23.88.57 1.15.24.19.55.3.88.3h10.14a1.44 1.44 0 001.45-1.45V5.45h-4.35z","fill-rule":"nonzero"}}]},"name":"icon-delete","theme":"filled"};

const IconDeleteFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconDeleteFilledSvg
      }
    })
  }
});

export default IconDeleteFilled;