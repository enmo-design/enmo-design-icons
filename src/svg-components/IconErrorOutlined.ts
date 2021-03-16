// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconErrorOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 14.67a6.67 6.67 0 11.01-13.35A6.67 6.67 0 018 14.67M8 0a8 8 0 000 16A8 8 0 008 0m2.87 4.86a.67.67 0 00-.94 0L7.87 6.92 5.8 4.86a.67.67 0 10-.94.94l2.06 2.07-2.06 2.06a.67.67 0 00.94.94l2.07-2.06 2.06 2.06a.66.66 0 00.94 0 .67.67 0 000-.94L8.81 7.87l2.06-2.07a.67.67 0 000-.94","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-error","theme":"outlined"};

const IconErrorOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconErrorOutlinedSvg
      }
    })
  }
});

export default IconErrorOutlined;