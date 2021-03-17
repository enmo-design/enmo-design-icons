// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconUpOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M14.61 12.06a.76.76 0 101.09-1.05L8.36 3.43a.76.76 0 00-1.1.01L.22 11.02a.76.76 0 001.1 1.03l6.5-7 6.79 7.01z","fill-rule":"nonzero"}}]},"name":"icon-up","theme":"outlined"};

const IconUpOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconUpOutlinedSvg
      }
    })
  }
});

export default IconUpOutlined;