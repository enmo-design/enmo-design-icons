// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconArrowDownFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M10.34.5c0-.3-.2-.5-.5-.5h-3.8c-.3 0-.5.2-.5.5V8h-3.9c-.2 0-.4.1-.5.3 0 .2 0 .4.1.5l6.3 7c.2.1.3.2.4.2.2 0 .3-.1.4-.2l6.3-7c.1-.1.2-.4.1-.5-.1-.2-.2-.3-.4-.3h-4V.5z","fill-rule":"nonzero"}}]},"name":"icon-arrow-down","theme":"filled"};

const IconArrowDownFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconArrowDownFilledSvg
      }
    })
  }
});

export default IconArrowDownFilled;