// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconViewOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M7.99 2c5.48 0 7.7 5.04 7.78 5.25.25.46.27 1.23.02 1.76 0 0-2.07 5.22-7.8 5.22-5.74 0-7.8-5.2-7.82-5.25a2.14 2.14 0 01.05-1.76c.07-.17 2.3-5.21 7.77-5.21zm0 1.37c-4.6 0-6.53 4.38-6.54 4.43-.1.18-.1.5-.03.63.09.24 1.78 4.44 6.57 4.44 4.8 0 6.53-4.35 6.55-4.4a.9.9 0 00.01-.63c-.1-.23-2-4.47-6.56-4.47zm0 1.36c1.5 0 2.71 1.21 2.71 2.71v1.53a2.72 2.72 0 01-5.43 0V7.44c0-1.5 1.22-2.71 2.72-2.71zm0 1.35c-.75 0-1.36.61-1.36 1.36v1.53a1.36 1.36 0 002.72 0V7.44c0-.75-.61-1.36-1.36-1.36z","fill-rule":"nonzero"}}]},"name":"icon-view","theme":"outlined"};

const IconViewOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconViewOutlinedSvg
      }
    })
  }
});

export default IconViewOutlined;