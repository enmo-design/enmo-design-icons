// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconConsoleOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 0A8 8 0 018 16 8 8 0 018 0zm.7 1.48v2.2H7.29v-2.2a6.52 6.52 0 00-5.8 5.8h2.2V8.7h-2.2a6.52 6.52 0 005.8 5.8v-2.2H8.7v2.2a6.52 6.52 0 005.8-5.8h-2.2V7.28h2.2a6.52 6.52 0 00-5.8-5.8zm-4.46 9.3l1.02 1.02-1.02 1.02-1.02-1.02 1.02-1.02zm7.5 0l1.02 1.02-1.02 1.02-1.02-1.02 1.02-1.02zm-.65-5.9L9.18 8.45c-.17.48-.65.82-1.18.82-.7 0-1.28-.57-1.28-1.28 0-.54.34-1.01.84-1.2l3.53-1.91zM4.24 3.22l1.02 1.02-1.02 1.02-1.02-1.02 1.02-1.02zm7.5-.01l1.02 1.02-1.02 1.02-1.02-1.02 1.02-1.02z","fill-rule":"nonzero"}}]},"name":"icon-console","theme":"outlined"};

const IconConsoleOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconConsoleOutlinedSvg
      }
    })
  }
});

export default IconConsoleOutlined;