// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconCaretUpOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M16 13H0L8 2.74z","fill-rule":"nonzero"}}]},"name":"icon-caret-up","theme":"outlined"};

const IconCaretUpOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconCaretUpOutlinedSvg
      }
    })
  }
});

export default IconCaretUpOutlined;