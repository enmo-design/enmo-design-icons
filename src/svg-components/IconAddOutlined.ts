// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconAddOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M9.6 0v6.4H16v3.2H9.6V16H6.4V9.6H0V6.4h6.4V0h3.2z","fill-rule":"nonzero"}}]}]},"name":"icon-add","theme":"outlined"};

const IconAddOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconAddOutlinedSvg
      }
    })
  }
});

export default IconAddOutlined;