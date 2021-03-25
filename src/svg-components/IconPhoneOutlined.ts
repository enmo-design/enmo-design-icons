// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconPhoneOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M6.1 4.76c.62-.57.7-1.46.12-2.1L4.47.59A1.77 1.77 0 002.1.34c-.04.07-.12.07-.12.1L.47 1.88c-1.45 1.36.6 5.07 4.38 8.6 3.77 3.54 7.66 5.43 9.11 4.1l1.53-1.42c.68-.64.68-1.64 0-2.21l-.12-.1-2.21-1.65a1.73 1.73 0 00-2.25.1l-.95.9a13.42 13.42 0 01-2.7-1.96 14.17 14.17 0 01-2.07-2.5l.92-.97zm-.8-1.39c.16.22.16.54-.03.68L4 5.26a.52.52 0 00-.11.65 13.92 13.92 0 005.8 5.42c.22.1.49.07.68-.1l1.3-1.22c.22-.21.49-.21.72-.04l2.2 1.68s.05 0 .05.04c.23.18.23.5.03.71l-.03.04-1.53 1.42c-.72.68-4.23-1.07-7.55-4.1C2.3 6.7.47 3.37 1.23 2.66L2.79 1.2c.23-.15.61-.15.8.1l1.72 2.07z","fill-rule":"nonzero"}}]},"name":"icon-phone","theme":"outlined"};

const IconPhoneOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconPhoneOutlinedSvg
      }
    })
  }
});

export default IconPhoneOutlined;