// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconExportOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd","fill":"none"},"children":[{"tag":"path","attrs":{"d":"M0 16h16V0H0z"}},{"tag":"path","attrs":{"d":"M11.04 0h.03c.18.03.33.1.44.23l3.71 3.85c.12.12.2.29.21.46v10.72c0 .2-.07.38-.2.52a.7.7 0 01-.51.22H8.66a.74.74 0 01-.72-.75c0-.4.32-.73.72-.74H14V5.36h-3.01a.72.72 0 01-.51-.22.75.75 0 01-.21-.53V1.5H3.33v6.03c0 .4-.32.73-.72.74a.74.74 0 01-.72-.74V.74A.71.71 0 012.6 0h8.43zM5.68 7.6a.7.7 0 01.7.2l2.5 2.6c.27.28.27.73 0 1.01l-2.5 2.6a.7.7 0 01-.5.22h-.01a.7.7 0 01-.49-.2L5.36 14a.76.76 0 010-1.04l1.26-1.31h-5.1a.73.73 0 01-.72-.75c0-.4.32-.73.72-.74h5.1L5.36 8.85a.76.76 0 01-.19-.72.73.73 0 01.5-.52zm6.03-5.05v1.32h1.28L11.7 2.55z","fill":"#000"}}]}]},"name":"icon-export","theme":"outlined"};

const IconExportOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconExportOutlinedSvg
      }
    })
  }
});

export default IconExportOutlined;