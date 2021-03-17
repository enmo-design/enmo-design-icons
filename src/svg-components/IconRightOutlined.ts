// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconRightOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M11.76 7.3L4.26.2A.74.74 0 003.2.24c-.28.31-.26.8.04 1.08l6.92 6.55-6.93 6.84a.77.77 0 000 1.06c.28.3.74.3 1.04.04l7.5-7.4a.77.77 0 00-.01-1.1","fill-rule":"nonzero"}}]},"name":"icon-right","theme":"outlined"};

const IconRightOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconRightOutlinedSvg
      }
    })
  }
});

export default IconRightOutlined;