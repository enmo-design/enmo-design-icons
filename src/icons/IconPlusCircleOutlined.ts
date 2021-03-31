// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconPlusCircleOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 14.67a6.67 6.67 0 11.01-13.35A6.67 6.67 0 018 14.67M8 0a8 8 0 000 16A8 8 0 008 0m3.58 7.14H8.67V4.23a.67.67 0 10-1.34 0v2.91H4.42a.67.67 0 000 1.34h2.91v2.91a.67.67 0 101.34 0V8.48h2.91a.67.67 0 100-1.34","fill-rule":"nonzero"}}]},"name":"icon-plus-circle","theme":"outlined"};

const IconPlusCircleOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconPlusCircleOutlinedSvg
      }
    })
  }
});

export default IconPlusCircleOutlined;