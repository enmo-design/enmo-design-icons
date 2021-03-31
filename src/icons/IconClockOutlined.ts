// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconClockOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 14.67a6.67 6.67 0 11.01-13.35A6.67 6.67 0 018 14.67M8 0a8 8 0 000 16A8 8 0 008 0m.4 7.9v-4c0-.39-.27-.7-.6-.7-.33 0-.6.31-.6.7v4.3c0 .17.06.35.18.48l2 2.32c.11.13.26.2.42.2.17 0 .32-.08.42-.2a.77.77 0 000-.98L8.4 7.9z","fill-rule":"nonzero"}}]},"name":"icon-clock","theme":"outlined"};

const IconClockOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconClockOutlinedSvg
      }
    })
  }
});

export default IconClockOutlined;