// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconStartOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 0a8 8 0 010 16A8 8 0 018 0zm0 1.33a6.67 6.67 0 10.01 13.35A6.67 6.67 0 008 1.33zM6.64 5.06l4.15 2.54c.28.17.28.61 0 .77l-4.15 2.57c-.29.17-.64-.04-.64-.4V5.46c0-.35.35-.56.64-.4z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-start","theme":"outlined"};

const IconStartOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconStartOutlinedSvg
      }
    })
  }
});

export default IconStartOutlined;