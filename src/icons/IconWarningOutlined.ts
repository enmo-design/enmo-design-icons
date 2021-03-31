// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconWarningOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M7.96 5.4a.64.64 0 00-.65.64v3.23a.64.64 0 101.3 0V6.04a.64.64 0 00-.65-.64m0 5.8a.65.65 0 100 1.3.65.65 0 000-1.3m3.87 2.42H1.5L4.1 9.14l.66-1.16 3.2-5.57 3.2 5.57.68 1.16 2.57 4.48h-2.57zm3.92-.25L8.85 1.36C8.63 1 8.31.8 7.94.8c-.35 0-.67.2-.88.56L.17 13.37c-.2.36-.22.74-.05 1.05.18.3.52.48.93.48h13.82c.4 0 .74-.17.92-.48.18-.31.16-.7-.04-1.05z","fill-rule":"nonzero"}}]},"name":"icon-warning","theme":"outlined"};

const IconWarningOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconWarningOutlinedSvg
      }
    })
  }
});

export default IconWarningOutlined;