// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconExpand2FilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8.81 5.54l3.12 3.34a.66.66 0 01-.5 1.12.67.67 0 01-.47-.21l-2.62-2.8-2.51 2.79a.67.67 0 11-1-.9l3-3.33a.66.66 0 01.98 0M0 8a8 8 0 0016 0A8.01 8.01 0 000 8","fill-rule":"nonzero"}}]},"name":"icon-expand2","theme":"filled"};

const IconExpand2Filled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconExpand2FilledSvg
      }
    })
  }
});

export default IconExpand2Filled;