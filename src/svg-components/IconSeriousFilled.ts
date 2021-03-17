// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconSeriousFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10a.63.63 0 01-.64-.64V3.6c0-.32.24-.64.64-.64s.64.24.64.64v5.76c0 .4-.32.64-.64.64zm-.72 1.68c0-.4.32-.72.72-.72.4 0 .72.32.72.72 0 .4-.32.72-.72.72a.72.72 0 01-.72-.72z","fill-rule":"nonzero"}}]},"name":"icon-serious","theme":"filled"};

const IconSeriousFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconSeriousFilledSvg
      }
    })
  }
});

export default IconSeriousFilled;