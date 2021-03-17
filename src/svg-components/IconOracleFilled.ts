// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconOracleFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M14.08 1.6c1.07 0 1.92.86 1.92 1.94v8.92c0 1.08-.9 1.94-1.92 1.94H1.92A1.91 1.91 0 010 12.46V3.55C0 2.45.9 1.6 1.92 1.6h12.16zm-3.2 2.29H4.95a3.86 3.86 0 00-3.83 3.88v.46a3.86 3.86 0 003.83 3.88h5.91a3.86 3.86 0 003.83-3.88v-.46a3.86 3.86 0 00-3.83-3.88zm.05 1.6a2.41 2.41 0 012.31 2.34v.46a2.3 2.3 0 01-2.31 2.34H5.01a2.3 2.3 0 01-2.3-2.34v-.46A2.3 2.3 0 015 5.49h5.92z","fill-rule":"nonzero"}}]},"name":"icon-oracle","theme":"filled"};

const IconOracleFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconOracleFilledSvg
      }
    })
  }
});

export default IconOracleFilled;