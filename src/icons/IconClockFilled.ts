// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconClockFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M10.7 10.85a.66.66 0 01-.94 0L7.53 8.62a.66.66 0 01-.2-.47V4a.67.67 0 011.34 0v3.87l2.04 2.04a.67.67 0 010 .94M8 0a8 8 0 000 16A8 8 0 008 0","fill-rule":"nonzero"}}]},"name":"icon-clock","theme":"filled"};

const IconClockFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconClockFilledSvg
      }
    })
  }
});

export default IconClockFilled;