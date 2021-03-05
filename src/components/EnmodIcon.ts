import Vue, { PropType } from 'vue';
import { clone } from 'ramda';
import { AbstractNode, IconDefinition } from '../types';

function attributeHandler(attrs: any, original: boolean) {
  const fill = attrs.fill;
  const stroke = attrs.stroke;
  delete attrs.fill;
  delete attrs.stroke;

  if (original) {
    if (fill) {
      attrs = { ...attrs, fill };
    }
    if (stroke) {
      attrs = { ...attrs, stroke };
    }
  } else {
    attrs = { ...attrs, fill: 'currentColor', stroke: 'currentColor' };
  }

  return attrs;
}

function generateElement(
  createElement: Function,
  node: AbstractNode,
  key: string,
  original: boolean,
  rootProps?: { [key: string]: any } | false
): any {
  const attrs = attributeHandler(clone(node.attrs), original);
  if (!rootProps) {
    return createElement(node.tag, { key, attrs: { ...attrs } }, [
      (node.children || []).map((child, index) =>
        generateElement(
          createElement,
          child,
          `${key}-${node.tag}-${index}`,
          original
        )
      )
    ]);
  }

  return createElement(
    node.tag,
    {
      key,
      attrs: { ...attrs, ...rootProps }
    },
    (node.children || []).map((child, index) =>
      generateElement(
        createElement,
        child,
        `${key}-${node.tag}-${index}`,
        original
      )
    )
  );
}

const EnmodIcon = Vue.extend({
  props: {
    icon: { type: Object as PropType<IconDefinition> },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    spin: Boolean,
    original: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  render(h) {
    const digitReg = /^\d+$/;
    const width = digitReg.test(this.width)
      ? this.width + 'px'
      : this.width || '1em';
    const height = digitReg.test(this.height)
      ? this.height + 'px'
      : this.height || '1em';

    const rootProps = {
      width,
      height
    };

    return generateElement(
      h,
      this.icon.icon as AbstractNode,
      `svg-${this.icon.name}`,
      this.original,
      rootProps
    );
  }
});

export default EnmodIcon;
