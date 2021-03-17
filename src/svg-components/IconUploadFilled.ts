// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconUploadFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M8.92 14v-3.6h1.64c.1 0 .2-.04.26-.1.07-.08.1-.17.1-.27a.36.36 0 00-.1-.24L8.29 7.01a.36.36 0 00-.53 0L5.1 9.78a.36.36 0 00.26.61H7.1V14H3.64a3.82 3.82 0 010-7.64 4.55 4.55 0 119.1.38 3.64 3.64 0 01-.19 7.26H8.92z","fill-rule":"nonzero"}}]}]},"name":"icon-upload","theme":"filled"};

const IconUploadFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconUploadFilledSvg
      }
    })
  }
});

export default IconUploadFilled;