// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconUpCircleOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M14.67 8a6.67 6.67 0 11-13.35-.01A6.67 6.67 0 0114.67 8M0 8a8 8 0 0016 0A8 8 0 000 8m4.84.89a.67.67 0 00.99.89l2.5-2.8 2.63 2.8a.67.67 0 10.97-.9L8.81 5.54a.67.67 0 00-.98.01l-3 3.34z","fill-rule":"nonzero"}}]},"name":"icon-up-circle","theme":"outlined"};

const IconUpCircleOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconUpCircleOutlinedSvg
      }
    })
  }
});

export default IconUpCircleOutlined;