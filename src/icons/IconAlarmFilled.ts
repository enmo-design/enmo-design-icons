// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconAlarmFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M14.14 3.25c.55.32 1 1.1 1 1.72v6.04c0 .63-.44 1.4-.99 1.72l-5.22 3.03c-.54.32-1.44.32-1.98 0l-5.23-3.03a2.21 2.21 0 01-.98-1.72V4.97c0-.62.44-1.4.98-1.72L6.94.24a2.17 2.17 0 011.98 0l5.22 3.01zM7.8 10.72a.58.58 0 01-.42-.18.64.64 0 01-.18-.44c0-.34.27-.62.6-.62.33 0 .6.28.6.62 0 .16-.06.32-.18.44a.58.58 0 01-.42.18zM7.94 4c-.39 0-.75.2-.94.54L4.07 9.68a.99.99 0 00-.13.5c0 .56.48 1.02 1.07 1.02h5.85c.18 0 .36-.04.52-.12.25-.13.43-.35.51-.61a1 1 0 00-.08-.79L8.89 4.54C8.69 4.2 8.33 4 7.94 4zM7.8 6.4c.33 0 .6.28.6.63v1.21c0 .35-.27.63-.6.63a.58.58 0 01-.42-.19.64.64 0 01-.18-.44V7.03c0-.35.27-.63.6-.63z","fill-rule":"nonzero"}}]},"name":"icon-alarm","theme":"filled"};

const IconAlarmFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconAlarmFilledSvg
      }
    })
  }
});

export default IconAlarmFilled;