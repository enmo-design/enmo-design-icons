// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMore2OutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M12.8 8c0 .59.32 1.1.8 1.38A1.59 1.59 0 0016 8a1.6 1.6 0 10-3.2 0M9.6 8c0-.59-.32-1.1-.8-1.38a1.58 1.58 0 00-1.6 0 1.6 1.6 0 101.6 2.76c.48-.28.8-.79.8-1.38M3.2 8c0-.59-.32-1.1-.8-1.38A1.6 1.6 0 103.2 8","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-more-2","theme":"outlined"};

const IconMore2Outlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMore2OutlinedSvg
      }
    })
  }
});

export default IconMore2Outlined;