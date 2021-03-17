import Vue from 'vue'
import { AbstractNode, IconDefinition } from './types'
import insertCss from './insert-css'

export function warn (valid: boolean, message: string): void {
  // Support uglify
  if (
    process.env.NODE_ENV !== 'production' &&
    !valid &&
    console !== undefined
  ) {
    console.error(`Warning: ${message}`)
  }
}

export function warning (valid: boolean, message: string): void {
  warn(valid, `[@enmo-design/icons-vue] ${message}`)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isIconDefinition (target: any): target is IconDefinition {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (typeof target.icon === 'object' || typeof target.icon === 'function')
  )
}

export function generate (
  createElement: Function,
  node: AbstractNode,
  key: string,
  rootProps?: { [key: string]: any } | false,
  rootStyle?: { [key: string]: any } | false
): any {
  if (!rootProps) {
    return createElement(
      node.tag,
      { key, attrs: { ...node.attrs } },
      (node.children || []).map((child, index) =>
        generate(createElement, child, `${key}-${node.tag}-${index}`)
      )
    )
  }

  return createElement(
    node.tag,
    {
      key,
      style: { ...rootStyle },
      attrs: {
        ...rootProps,
        ...node.attrs
      }
    },
    (node.children || []).map((child, index) =>
      generate(createElement, child, `${key}-${node.tag}-${index}`)
    )
  )
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
} as any

export const iconStyles = `
.enmoicon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.enmoicon > * {
  line-height: 1;
}

.enmoicon svg {
  display: inline-block;
}

.enmoicon::before {
  display: none;
}

.enmoicon .enmoicon-icon {
  display: block;
}

.enmoicon[tabindex] {
  cursor: pointer;
}

.enmoicon-spin::before,
.enmoicon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`

let cssInjectedFlag = false

export const useInsertStyles = (styleStr: string = iconStyles): void => {
  Vue.nextTick(() => {
    if (!cssInjectedFlag) {
      if (
        typeof window !== 'undefined' &&
        window.document &&
        window.document.documentElement
      ) {
        insertCss(styleStr, {
          prepend: true
        })
      }
      cssInjectedFlag = true
    }
  })
}
