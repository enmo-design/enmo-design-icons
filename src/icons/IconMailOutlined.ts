// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMailOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M14.67 13.6H1.33V5.48L7.64 9.5c.22.13.5.13.72 0l6.3-4.02v8.12zM1.33 2.93h13.34v.97L8 8.14 1.33 3.9v-.97zM14.67 1.6H1.34C.6 1.6 0 2.2 0 2.93V13.6c0 .74.6 1.33 1.34 1.33h13.33c.73 0 1.33-.6 1.33-1.33V2.93c0-.74-.6-1.33-1.33-1.33z","fill-rule":"nonzero"}}]},"name":"icon-mail","theme":"outlined"};

const IconMailOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMailOutlinedSvg
      }
    })
  }
});

export default IconMailOutlined;