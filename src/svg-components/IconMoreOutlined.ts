// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMoreOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 3.2c.59 0 1.1-.32 1.38-.8A1.59 1.59 0 008 0a1.6 1.6 0 100 3.2m0 3.2c-.59 0-1.1.32-1.38.8a1.58 1.58 0 000 1.6 1.6 1.6 0 102.76-1.6A1.6 1.6 0 008 6.4m0 6.4c-.59 0-1.1.32-1.38.8A1.6 1.6 0 108 12.8","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-more","theme":"outlined"};

const IconMoreOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMoreOutlinedSvg
      }
    })
  }
});

export default IconMoreOutlined;