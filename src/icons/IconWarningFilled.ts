// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconWarningFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M7.96 1c.35 0 .68.2.88.56l6.9 12.01c.21.36.23.74.05 1.05-.18.3-.52.49-.92.49H1.05c-.4 0-.75-.18-.93-.5-.17-.3-.16-.68.04-1.04L7.07 1.56c.2-.36.53-.56.89-.56zM8 11.63a1.14 1.14 0 100 2.28 1.14 1.14 0 000-2.28zm0-8c-.63 0-1.14.44-1.14.98v4.9c0 .54.5.98 1.14.98.63 0 1.14-.44 1.14-.98V4.6c0-.54-.5-.98-1.14-.98z","fill-rule":"nonzero"}}]},"name":"icon-warning","theme":"filled"};

const IconWarningFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconWarningFilledSvg
      }
    })
  }
});

export default IconWarningFilled;