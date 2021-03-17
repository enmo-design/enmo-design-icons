// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconOracleOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M11.3 11.13H4.7a3.24 3.24 0 010-6.48h6.6a3.24 3.24 0 010 6.48m0-7.93H4.7a4.7 4.7 0 000 9.39h6.6a4.7 4.7 0 000-9.39","fill-rule":"nonzero"}}]},"name":"icon-oracle","theme":"outlined"};

const IconOracleOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconOracleOutlinedSvg
      }
    })
  }
});

export default IconOracleOutlined;