// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconCreateFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M11.58 8.48H8.67v2.91a.67.67 0 11-1.34 0V8.48H4.42a.67.67 0 110-1.34h2.91V4.23a.67.67 0 111.34 0v2.91h2.91a.67.67 0 110 1.34M8 0a8.01 8.01 0 000 16A8 8 0 008 0","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-create","theme":"filled"};

const IconCreateFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconCreateFilledSvg
      }
    })
  }
});

export default IconCreateFilled;