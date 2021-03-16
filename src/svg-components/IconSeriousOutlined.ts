// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconSeriousOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 1.12c.96 0 1.84.16 2.64.56.8.32 1.52.88 2.16 1.44a6.4 6.4 0 011.44 2.16c.32.88.56 1.76.56 2.64 0 .88-.16 1.84-.56 2.64-.32.8-.88 1.52-1.44 2.16a6.4 6.4 0 01-2.16 1.44c-.88.32-1.76.56-2.64.56-.88 0-1.84-.16-2.64-.56a7.84 7.84 0 01-2.16-1.44 6.4 6.4 0 01-1.44-2.16 7.81 7.81 0 01-.56-2.64c0-.88.16-1.84.56-2.64.32-.8.88-1.52 1.44-2.16a6.4 6.4 0 012.16-1.44A5.8 5.8 0 018 1.12zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10a.63.63 0 01-.64-.64V3.6c0-.32.24-.64.64-.64s.64.24.64.64v5.76c0 .4-.32.64-.64.64zm-.72 1.68c0-.4.32-.72.72-.72.4 0 .72.32.72.72 0 .4-.32.72-.72.72a.72.72 0 01-.72-.72z","fill-rule":"nonzero","fill":"#000"}}]},"name":"icon-serious","theme":"outlined"};

const IconSeriousOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconSeriousOutlinedSvg
      }
    })
  }
});

export default IconSeriousOutlined;