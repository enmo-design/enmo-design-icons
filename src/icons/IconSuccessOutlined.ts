// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconSuccessOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 14.67a6.67 6.67 0 11.01-13.35A6.67 6.67 0 018 14.67M8 0a8 8 0 000 16A8 8 0 008 0m2.23 6.27L7.07 9.73l-1.3-1.45a.67.67 0 00-.99.89l1.79 2c.12.14.3.22.49.22s.37-.08.5-.22l3.65-4a.67.67 0 00-.98-.9","fill-rule":"nonzero"}}]},"name":"icon-success","theme":"outlined"};

const IconSuccessOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconSuccessOutlinedSvg
      }
    })
  }
});

export default IconSuccessOutlined;