import {
  generate,
  isIconDefinition,
  warning,
  useInsertStyles,
  svgBaseProps
} from '../utils';
import { IconDefinition, AbstractNode } from '../types';
import Vue, { PropType } from 'vue';

const EnmodIcon = Vue.extend({
  props: {
    icon: { type: Object as PropType<IconDefinition> },
    component: Object,
    spin: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    rotate: Number
  },
  render(h) {
    useInsertStyles();

    let svgComponent;

    const spin = this.spin;
    const rotate = this.rotate;

    const svgClassString =
      !!spin || (this.icon && this.icon.name === 'loading')
        ? 'enmoicon-spin'
        : '';

    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`
        }
      : undefined;

    const svgAttributes = {
      ...svgBaseProps,
      ...this.$attrs,
      class: svgClassString
    };

    if (this.icon) {
      if (!isIconDefinition(this.icon)) {
        warning(true, `icon should be icon definition, but got ${this.icon}`);
      } else {
        svgComponent = generate(
          h,
          this.icon.icon as AbstractNode,
          `svg-${this.icon.name}`,
          svgAttributes,
          svgStyle
        );
      }
    } else if (this.component) {
      svgComponent = h(this.component, {
        style: svgStyle,
        attrs: svgAttributes
      });
    }

    return h(
      'span',
      {
        class: {
          enmoicon: true
        },
        attrs: {
          role: 'img'
        },
        on: {
          ...this.$listeners
        }
      },
      [svgComponent]
    );
  }
});

export default EnmodIcon;
