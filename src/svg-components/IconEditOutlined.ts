// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconEditOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M13.1 6.64l-3.8-3.8 1.43-1.44 3.8 3.8-1.43 1.44zm-7.88 7.88l-3.8-3.8 6.9-6.9 3.8 3.8-6.9 6.9zm-3.82.03v-1.9l1.9 1.9H1.4zM15.52 4.23L11.7.43c-.26-.27-.61-.42-.98-.4-.36 0-.71.14-.97.4L.44 9.74c-.3.31-.45.74-.38 1.17-.02.06-.04.12-.04.18v3.46c0 .75.62 1.37 1.37 1.37h3.46c.06 0 .12-.02.18-.04l.19.02c.35 0 .7-.13.98-.4l9.31-9.32c.54-.54.54-1.4 0-1.95z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-edit","theme":"outlined"};

const IconEditOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconEditOutlinedSvg
      }
    })
  }
});

export default IconEditOutlined;