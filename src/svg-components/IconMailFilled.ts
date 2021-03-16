// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMailFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 9.6a.67.67 0 01-.36-.1L0 4.63v8.97c0 .74.6 1.33 1.33 1.33h13.34c.73 0 1.33-.59 1.33-1.33V4.64L8.36 9.5c-.1.06-.23.1-.36.1m6.67-8H1.33C.6 1.6 0 2.2 0 2.93v.1l8 5.11 8-5.08v-.13c0-.74-.6-1.33-1.33-1.33","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-mail","theme":"filled"};

const IconMailFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMailFilledSvg
      }
    })
  }
});

export default IconMailFilled;