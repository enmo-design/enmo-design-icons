// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconPlayCircleFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 0a8 8 0 100 16A8 8 0 008 0zm3.91 8.46l-5.4 3.14a.56.56 0 01-.82-.49V4.9c0-.43.45-.69.82-.49l5.4 3.11c.38.2.38.75 0 .95z","fill-rule":"nonzero"}}]},"name":"icon-play-circle","theme":"filled"};

const IconPlayCircleFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconPlayCircleFilledSvg
      }
    })
  }
});

export default IconPlayCircleFilled;