// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMenuOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 16h16V0H0z"}},{"tag":"path","attrs":{"d":"M14.85 12.49c.32 0 .61.14.83.37a1.18 1.18 0 01-.82 1.99H1.15a1.18 1.18 0 01-.01-2.36zm0-5.67A1.17 1.17 0 0116 8.03a1.18 1.18 0 01-1.14 1.15H1.22a1.18 1.18 0 010-2.36zm0-5.67c.32.01.61.14.83.37a1.18 1.18 0 01-.82 1.99H1.15A1.17 1.17 0 010 2.3c.02-.62.52-1.13 1.14-1.15z"}}]}]},"name":"icon-menu","theme":"outlined"};

const IconMenuOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMenuOutlinedSvg
      }
    })
  }
});

export default IconMenuOutlined;