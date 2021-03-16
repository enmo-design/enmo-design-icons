// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconDoubtOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M12 13.32a6.63 6.63 0 01-8 0A6.65 6.65 0 018 1.33a6.67 6.67 0 014 11.99M8 0a8 8 0 000 16A8 8 0 108 0m2.67 5.75c0-1.34-1.2-2.42-2.67-2.42S5.33 4.42 5.33 5.75v.32a.67.67 0 101.34 0v-.32c0-.6.6-1.08 1.33-1.08.74 0 1.33.48 1.33 1.08v1.02c0 .03 0 .66-.83 1.23-.2.15-.43.27-.67.37-.29.07-.5.33-.5.63v.77a.67.67 0 101.34 0v-.32A3.71 3.71 0 0010.3 8c.4-.68.36-1.25.36-1.26v-1zM8 11.33a.67.67 0 100 1.34.67.67 0 000-1.34","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-doubt","theme":"outlined"};

const IconDoubtOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconDoubtOutlinedSvg
      }
    })
  }
});

export default IconDoubtOutlined;