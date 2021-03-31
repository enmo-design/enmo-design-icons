// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconLayerFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M15.74 10.82c.2.4.04.88-.35 1.08l-7.45 3.75-7.36-3.66a.8.8 0 01-.36-1.08.8.8 0 011.07-.36l6.64 3.3 6.73-3.39a.8.8 0 011.08.36zm0-3.6c.2.4.04.88-.35 1.08l-7.45 3.75L.58 8.4a.8.8 0 01-.36-1.07.8.8 0 011.07-.36l6.64 3.3 6.73-3.4a.8.8 0 011.08.36zM8.5.14l6.85 3.2c.56.27.75.84.47 1.3-.2.1-.38.29-.57.38L8.4 8.3c-.28.2-.75.2-1.03 0L.62 5.02C.05 4.83-.14 4.17.15 3.8c.09-.19.4-.33.47-.38L7.47.14c.27-.19.65-.19 1.03 0z","fill-rule":"nonzero"}}]},"name":"icon-layer","theme":"filled"};

const IconLayerFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconLayerFilledSvg
      }
    })
  }
});

export default IconLayerFilled;