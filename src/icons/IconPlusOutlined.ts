// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconPlusOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M9.6 0v6.4H16v3.2H9.6V16H6.4V9.6H0V6.4h6.4V0h3.2z","fill-rule":"nonzero"}}]},"name":"icon-plus","theme":"outlined"};

const IconPlusOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconPlusOutlinedSvg
      }
    })
  }
});

export default IconPlusOutlined;