// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMenuUnfoldOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8.27 0C6.2 0 4.24.85 2.77 2.38a.66.66 0 00.02.92c.25.25.65.24.9 0a6.29 6.29 0 019.13-.04A6.79 6.79 0 0114.72 8c0 3.7-2.9 6.7-6.45 6.7a6.35 6.35 0 01-4.73-2.15.64.64 0 00-.9-.06.66.66 0 00-.05.93A7.63 7.63 0 008.27 16C12.53 16 16 12.41 16 8s-3.47-8-7.73-8zM6.83 4.57a.7.7 0 00-.97 0 .68.68 0 00-.01.97l.03.03 1.57 1.55H.7c-.39 0-.7.33-.7.73 0 .2.07.38.2.52s.3.22.5.22H7.7l-1.86 1.83a.67.67 0 000 .96c.27.26.7.27.98 0L9.8 8.47a.68.68 0 00.01-.95L6.83 4.57z","fill-rule":"nonzero"}}]},"name":"icon-menu-unfold","theme":"outlined"};

const IconMenuUnfoldOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMenuUnfoldOutlinedSvg
      }
    })
  }
});

export default IconMenuUnfoldOutlined;