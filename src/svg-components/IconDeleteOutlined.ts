// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconDeleteOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M13.04 4.35v10.14H2.9V4.35h10.14zm-7.97-2.9h5.8V2.9h-5.8V1.45zM15.22 2.9h-2.9V.97c0-.47-.38-.97-1.45-.97h-5.8C4 0 3.62.5 3.62.97V2.9H.72a.72.72 0 100 1.45h.73v10.14c0 .8.65 1.45 1.45 1.45h10.14c.8 0 1.45-.65 1.45-1.45V4.35h.73a.72.72 0 100-1.45zM10.14 12c.4 0 .73-.32.73-.72V6.52a.72.72 0 10-1.45 0v4.77c0 .4.32.72.72.72m-4.34 0c.4 0 .72-.32.72-.72V6.52a.72.72 0 10-1.45 0v4.77c0 .4.33.72.73.72","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-delete","theme":"outlined"};

const IconDeleteOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconDeleteOutlinedSvg
      }
    })
  }
});

export default IconDeleteOutlined;