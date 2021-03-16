// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMonitorScreenFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M14.72.8c.7 0 1.28.57 1.28 1.28v9.39c0 .7-.57 1.28-1.28 1.28H8.64v1.17h2.77c.36 0 .64.29.64.64v.21a.64.64 0 01-.64.64H4.7a.64.64 0 01-.64-.64v-.21c0-.35.29-.64.64-.64h2.46v-1.17H1.28c-.7 0-1.28-.58-1.28-1.28V2.08C0 1.38.57.8 1.28.8h13.44zm-1.8 3.44a.72.72 0 00-.68.18l-2.61 2.6-2.28-2.28a.72.72 0 00-1 0L2.83 8.2a.7.7 0 000 1 .71.71 0 001 .01l3-2.95 2.29 2.27a.71.71 0 001 0l3.12-3.1a.7.7 0 00-.32-1.18z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-monitor-screen","theme":"filled"};

const IconMonitorScreenFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMonitorScreenFilledSvg
      }
    })
  }
});

export default IconMonitorScreenFilled;