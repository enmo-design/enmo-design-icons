// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMenuFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M7.97.01a7.96 7.96 0 100 15.92 7.96 7.96 0 000-15.92zm3.26 11.58H4.71c-.6 0-1.08-.12-1.08-.72s.49-.73 1.08-.73h6.52c.6 0 1.09.13 1.09.73s-.49.72-1.09.72zm0-2.9H4.71c-.6 0-1.08-.12-1.08-.72s.49-.72 1.08-.72h6.52c.6 0 1.09.12 1.09.72s-.49.73-1.09.73zm0-2.89H4.71c-.6 0-1.08-.12-1.08-.72s.49-.73 1.08-.73h6.52c.6 0 1.09.13 1.09.73s-.49.72-1.09.72z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-menu","theme":"filled"};

const IconMenuFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMenuFilledSvg
      }
    })
  }
});

export default IconMenuFilled;