// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconDiskOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M13.14 0c.87 0 1.59.67 1.66 1.52v12.8c0 .87-.66 1.58-1.51 1.65l-.15.01H2.82c-.87 0-1.58-.67-1.66-1.52V1.66C1.16.8 1.83.08 2.68.01L2.82 0h10.32zm0 1.5H2.82a.17.17 0 00-.16.16v12.66c0 .09.07.16.16.16h10.32c.1 0 .17-.07.17-.16V1.66a.17.17 0 00-.17-.16zM8.88 9.15c.11.12 3.38 2.42 3.76 2.8a1.2 1.2 0 01-1.69 1.7c-.4-.4-2.7-3.67-2.8-3.77a.51.51 0 01.73-.73zM4.83 12a.83.83 0 110 1.67.83.83 0 010-1.67zM7.98 2a4.5 4.5 0 013.07 7.78c-.45-.34-.87-.68-1.1-.92a1.83 1.83 0 00-2.99 2.01A4.5 4.5 0 017.98 2zm0 3.66a.83.83 0 100 1.67.83.83 0 000-1.67z","fill-rule":"nonzero"}}]}]},"name":"icon-disk","theme":"outlined"};

const IconDiskOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconDiskOutlinedSvg
      }
    })
  }
});

export default IconDiskOutlined;