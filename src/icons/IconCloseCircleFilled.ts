// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconCloseCircleFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M10.87 9.93a.67.67 0 01-.94.94L7.87 8.81 5.8 10.87a.66.66 0 01-.94 0 .67.67 0 010-.94l2.06-2.06L4.86 5.8a.67.67 0 01.94-.94l2.07 2.06 2.06-2.06a.67.67 0 01.94.94L8.81 7.87l2.06 2.06zM8 0a8.01 8.01 0 000 16A8 8 0 008 0z","fill-rule":"nonzero"}}]},"name":"icon-close-circle","theme":"filled"};

const IconCloseCircleFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconCloseCircleFilledSvg
      }
    })
  }
});

export default IconCloseCircleFilled;