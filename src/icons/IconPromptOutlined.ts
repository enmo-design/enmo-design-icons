// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconPromptOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M7.98 15.96A7.98 7.98 0 117.98 0a7.98 7.98 0 010 15.96zm0-1.33a6.65 6.65 0 100-13.3 6.65 6.65 0 000 13.3zM7.3 7.3a.66.66 0 011.33 0v4.66a.67.67 0 01-1.33 0V7.3zm.6-2.12a.93.93 0 11-.02-1.87.93.93 0 01.02 1.87z","fill-rule":"nonzero"}}]},"name":"icon-prompt","theme":"outlined"};

const IconPromptOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconPromptOutlinedSvg
      }
    })
  }
});

export default IconPromptOutlined;