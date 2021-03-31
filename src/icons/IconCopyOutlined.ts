// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconCopyOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M11.9 0c.18 0 .36.06.49.19l3.04 3.05c.14.13.2.31.2.49v8.89c0 .72-.59 1.3-1.3 1.3h-2.58v.78c0 .72-.59 1.3-1.3 1.3H1.67a1.3 1.3 0 01-1.3-1.3V3.38c0-.71.58-1.3 1.3-1.3h2.57V1.3c0-.71.59-1.3 1.3-1.3zM4.26 3.51H1.8v11.06h8.52v-.65H5.56a1.3 1.3 0 01-1.3-1.3v-9.1zm6.47-2.08H5.68v11.06h8.51V4.78h-2.27a1.2 1.2 0 01-1.2-1.2V1.42zm1.5 7.69c.38 0 .7.32.7.7a.7.7 0 01-.7.71H7.65a.7.7 0 01-.7-.7c0-.4.32-.71.7-.71zm0-2.4a.7.7 0 010 1.41H7.65a.7.7 0 01-.7-.7c0-.39.32-.7.7-.7zm-.28-5.15v1.99h1.98l-1.98-1.99z","fill-rule":"evenodd"}}]},"name":"icon-copy","theme":"outlined"};

const IconCopyOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconCopyOutlinedSvg
      }
    })
  }
});

export default IconCopyOutlined;