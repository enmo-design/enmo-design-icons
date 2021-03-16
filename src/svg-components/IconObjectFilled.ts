// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconObjectFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd","fill":"none"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M15.23 5.33l.03.12.03 6.9-6.09 3.48a.25.25 0 01-.37-.21l-.03-6.9 6.09-3.48a.25.25 0 01.34.1zM1.38 5.26l.02.01L7.5 8.76l-.03 6.9a.25.25 0 01-.35.22l-.02-.01L1 12.38l.03-6.9a.25.25 0 01.35-.22zM8.24 0l6.36 3.47a.25.25 0 010 .43L8.24 7.58 2.03 3.97a.25.25 0 010-.44L8.24 0z","fill-rule":"nonzero","fill":"#000"}}]}]},"name":"icon-object","theme":"filled"};

const IconObjectFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconObjectFilledSvg
      }
    })
  }
});

export default IconObjectFilled;