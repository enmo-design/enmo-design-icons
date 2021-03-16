// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconHeadMenuFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M5.48.85H1.37C.6.85 0 1.46 0 2.22v4.11C0 7.1.61 7.7 1.37 7.7h4.11c.76 0 1.37-.61 1.37-1.37V2.22c0-.76-.61-1.37-1.37-1.37m10.04 2.46L12.62.4a1.37 1.37 0 00-1.94 0l-.4.4-2.51 2.5a1.36 1.36 0 000 1.94l.4.4 2.1 2.11.4.4c.54.54 1.4.54 1.94 0l2.5-2.5.41-.4c.53-.54.53-1.4 0-1.94M5.48 9.07H1.37C.6 9.07 0 9.68 0 10.44v4.11c0 .76.61 1.37 1.37 1.37h4.11c.76 0 1.37-.61 1.37-1.37v-4.11c0-.76-.61-1.37-1.37-1.37m8.22 0H9.6c-.76 0-1.37.61-1.37 1.37v4.11c0 .76.61 1.37 1.37 1.37h4.11c.76 0 1.37-.61 1.37-1.37v-4.11c0-.76-.61-1.37-1.37-1.37","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-head-menu","theme":"filled"};

const IconHeadMenuFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconHeadMenuFilledSvg
      }
    })
  }
});

export default IconHeadMenuFilled;