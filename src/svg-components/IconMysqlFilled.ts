// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconMysqlFilledSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M2.9 3.45l.9 1.3c.15-.16.24-.39.23-.62 0-.47-.31-.84-.7-.84-.16 0-.31.06-.43.16m1.22 5.93c-.03.14-.05.3-.05.47 0 .34-.03.6-.1.77-.08.24-.25.37-.48.33l-.05-.01c-.49-.2-.84-.69-1.06-1.43a4.2 4.2 0 010-2.15c.12-.53.13-.92.03-1.14-.3-.39-.56-.9-.77-1.53A4 4 0 00.74 3c-.4-.45-.61-.74-.7-1.02-.08-.25-.03-.46.17-.59.19-.1.46-.11.87-.04.4.1.7.23 1 .4l.4.27c.2.13.35.2.56.22l.12.01.12.02.41.05c.58.08 1.07.24 1.73.6a8.8 8.8 0 014.12 5.21l.07.22c.14.4.25.64.4.84.15.23.35.38.61.47 1.33.48 1.98.85 2.75 1.6.14.14.24.25.3.35.07.15.06.3-.06.4-.08.07-.18.1-.32.12h-.37l-.54.01a4.2 4.2 0 00-.64.1l-.25.06a8.14 8.14 0 004.4 2.16c.13.02.12.2 0 .2-9.31.66-11.52-4.75-11.77-5.27","fill-rule":"nonzero"}}]},"name":"icon-mysql","theme":"filled"};

const IconMysqlFilled = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconMysqlFilledSvg
      }
    })
  }
});

export default IconMysqlFilled;