// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconUnlockOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M1.39 14.58V7.64h2.7c.1.05.2.07.3.07.1 0 .2-.02.3-.07h9.2v6.94H1.4zm12.5-8.33H5.1V4.09a2.7 2.7 0 015.4 0 .7.7 0 001.39 0 4.1 4.1 0 00-8.18 0v2.16H1.38C.62 6.25 0 6.87 0 7.64v6.94c0 .77.62 1.39 1.38 1.4H13.9c.77-.01 1.39-.63 1.39-1.4V7.64c0-.77-.62-1.39-1.39-1.39zM7.64 9.03a.7.7 0 00-.7.7v2.77a.7.7 0 001.4 0V9.72a.7.7 0 00-.7-.7","fill-rule":"nonzero"}}]},"name":"icon-unlock","theme":"outlined"};

const IconUnlockOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconUnlockOutlinedSvg
      }
    })
  }
});

export default IconUnlockOutlined;