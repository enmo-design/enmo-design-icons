// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconEntryFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8.67 6.93H3.33a.67.67 0 010-1.33h5.34a.67.67 0 010 1.33m-6 2c0-.36.3-.66.66-.66H6A.67.67 0 016 9.6H3.33a.67.67 0 01-.66-.67m.66 2H6a.67.67 0 110 1.34H3.33a.67.67 0 110-1.34M14.67 1.6H1.33C.6 1.6 0 2.2 0 2.93V13.6c0 .74.6 1.33 1.33 1.33h13.34c.73 0 1.33-.59 1.33-1.33V2.93c0-.74-.6-1.33-1.33-1.33","fill-rule":"nonzero"}}]},"name":"icon-entry","theme":"filled"};

const IconEntryFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconEntryFilledSvg
      }
    })
  }
});

export default IconEntryFilled;