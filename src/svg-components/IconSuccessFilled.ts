// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconSuccessFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M11.14 7.15l-3.63 3.97a.66.66 0 01-.5.22.66.66 0 01-.49-.23L4.75 9.13a.66.66 0 11.99-.88l1.28 1.44 3.14-3.44a.66.66 0 11.98.9M7.94.02a7.96 7.96 0 000 15.9 7.96 7.96 0 000-15.9","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-success","theme":"filled"};

const IconSuccessFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconSuccessFilledSvg
      }
    })
  }
});

export default IconSuccessFilled;