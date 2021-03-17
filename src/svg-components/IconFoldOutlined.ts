// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconFoldOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M7.73 0c2.08 0 4.03.85 5.5 2.38.24.26.23.67-.02.92a.64.64 0 01-.9 0 6.29 6.29 0 00-9.13-.04A6.79 6.79 0 001.28 8c0 3.7 2.9 6.7 6.45 6.7 1.79 0 3.51-.79 4.73-2.15a.64.64 0 01.9-.06c.27.24.3.66.05.93A7.63 7.63 0 017.73 16C3.47 16 0 12.41 0 8s3.47-8 7.73-8zm1.44 4.57a.7.7 0 01.97 0c.27.27.28.7.01.97l-.03.03-1.57 1.55h6.75c.39 0 .7.33.7.73 0 .2-.07.38-.2.52a.67.67 0 01-.5.22H8.3l1.86 1.83a.67.67 0 010 .96.7.7 0 01-.98 0L6.2 8.47a.68.68 0 01-.01-.95l2.98-2.94z","fill-rule":"nonzero"}}]},"name":"icon-fold","theme":"outlined"};

const IconFoldOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconFoldOutlinedSvg
      }
    })
  }
});

export default IconFoldOutlined;