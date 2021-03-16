// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconPromptFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"nonzero","fill":"none"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M8 0a8 8 0 110 16A8 8 0 018 0zm0 6.67c-.37 0-.67.3-.67.66V12a.67.67 0 001.34 0V7.33A.67.67 0 008 6.67zm-.07-3.34a.93.93 0 10-.07 1.87.93.93 0 00.07-1.87z","fill":"#000"}}]}]},"name":"icon-prompt","theme":"filled"};

const IconPromptFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconPromptFilledSvg
      }
    })
  }
});

export default IconPromptFilled;