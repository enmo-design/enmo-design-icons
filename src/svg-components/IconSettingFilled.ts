// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconSettingFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M11.28 7.75a3.32 3.32 0 11-6.63 0 3.32 3.32 0 016.63 0m4.33-2.17a.66.66 0 00-.68-.48 1.32 1.32 0 01-1.18-2.06.66.66 0 00-.08-.83c-.4-.4-.86-.77-1.34-1.08A7.9 7.9 0 009.9.04a.66.66 0 00-.75.35c-.23.45-.69.74-1.19.74S7 .84 6.78.39a.66.66 0 00-.75-.35A7.9 7.9 0 003.6 1.13c-.49.3-.94.67-1.35 1.08a.66.66 0 00-.07.83 1.32 1.32 0 01-.85 2.03A1.3 1.3 0 011 5.1a.65.65 0 00-.68.48 7.93 7.93 0 000 4.34c.09.3.37.5.68.48a1.36 1.36 0 011.31.82c.17.4.12.87-.12 1.24-.17.26-.14.6.07.82.41.41.86.78 1.35 1.1.74.49 1.55.85 2.42 1.08.3.07.61-.07.75-.35.22-.46.68-.74 1.19-.74.5 0 .96.28 1.19.74.13.28.45.42.75.35a7.86 7.86 0 002.42-1.09c.48-.31.93-.68 1.34-1.09a.66.66 0 00.08-.82 1.32 1.32 0 01.84-2.04c.11-.02.23-.03.34-.02.32.02.6-.18.68-.48a7.96 7.96 0 000-4.34","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-setting","theme":"filled"};

const IconSettingFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconSettingFilledSvg
      }
    })
  }
});

export default IconSettingFilled;