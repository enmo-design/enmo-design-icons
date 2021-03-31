// This icon file is generated automatically.
// DON NOT EDIT IT MANUALLY

import Vue from 'vue';
import { IconDefinition } from '../types';
import EnmodIcon from '../components/EnmodIcon';

const IconPlusSquareOutlinedSvg: IconDefinition = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 16 16","xmlns:xlink":"http://www.w3.org/1999/xlink","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"filter","attrs":{"filterUnits":"objectBoundingBox","height":"102%","id":"b","width":"100.1%","x":"-.1%","y":"-1%"},"children":[{"tag":"feOffset","attrs":{"dy":"-1","in":"SourceAlpha","result":"shadowOffsetInner1"}},{"tag":"feComposite","attrs":{"in2":"SourceAlpha","in":"shadowOffsetInner1","k2":"-1","k3":"1","operator":"arithmetic","result":"shadowInnerInner1"}},{"tag":"feColorMatrix","attrs":{"in":"shadowInnerInner1","values":"0 0 0 0 0.909803922 0 0 0 0 0.909803922 0 0 0 0 0.909803922 0 0 0 1 0"}}]},{"tag":"path","attrs":{"d":"M2242 1138h694v50h-694z","id":"a"}}]},{"tag":"g","attrs":{"fill-rule":"evenodd"},"children":[{"tag":"path","attrs":{"d":"M-2612-1155H364v2604h-2976z"}},{"tag":"g","attrs":{"transform":"translate(-2612 -1155)"},"children":[{"tag":"use","attrs":{"xlink:href":"#a"}},{"tag":"use","attrs":{"filter":"url(#b)","xlink:href":"#a"}}]},{"tag":"path","attrs":{"d":"M0 0h16v16H0z"}},{"tag":"path","attrs":{"d":"M13.28 15.96H2.68A2.7 2.7 0 010 13.28V2.68A2.7 2.7 0 012.68 0h10.6a2.7 2.7 0 012.68 2.68V13.4a2.6 2.6 0 01-2.68 2.56zM2.68 1.22c-.73 0-1.46.73-1.46 1.46v10.6c0 .73.73 1.46 1.46 1.46h10.6c.85 0 1.46-.6 1.46-1.34V2.68c0-.73-.73-1.46-1.46-1.46H2.68zM7.92 12.3c-.37 0-.61-.24-.61-.6V4.38c0-.37.24-.61.6-.61.37 0 .62.24.62.6v7.2c0 .36-.25.72-.61.72zM3.78 8.04c0-.37.24-.6.6-.6h7.2c.36 0 .6.23.6.6s-.24.6-.6.6h-7.2c-.36 0-.6-.23-.6-.6z","fill-rule":"nonzero"}}]}]},"name":"icon-plus-square","theme":"outlined"};

const IconPlusSquareOutlined = Vue.extend({
  functional: true,
  render (h, context) {
    return h(EnmodIcon, {
      ...context.data,
      props: {
        icon: IconPlusSquareOutlinedSvg
      }
    })
  }
});

export default IconPlusSquareOutlined;