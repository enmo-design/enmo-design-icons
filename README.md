<h1 align="center">
Enmo Design Icons for Vue2.x
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@enmo-design/icons-vue.svg?style=flat)](https://npmjs.org/package/@enmo-design/icons-vue)
[![NPM downloads](http://img.shields.io/npm/dm/@enmo-design/icons-vue.svg?style=flat)](https://npmjs.org/package/@enmo-design/icons-vue)

</div>

## Install

```bash
npm install @enmo-design/icons-vue
```

## Basic Usage

```js
<template>
  <div>
    <smile-outlined></smile-outlined>
    <smile-outlined width="60" height="60"></smile-outlined>
    <smile-outlined width="60" height="60" spin></smile-outlined>
    <smile-outlined width="60" height="60" :rotate="45"></smile-outlined>
  </div>
</template>

<script>
  import { SmileOutlined } from '@enmo-design/icons';

  export default {
    components: { SmileOutlined }
  }
</script>
```
#### Supported props

|  Property   | Description  | Type | Default
|  :-  | :-  |  :-  | :-  |
| width  | The width of the svg element	 | string \| number | '1em' |
| height  | The height of the svg element	 | string \| number | '1em' |
| rotate  | Rotate degrees (not working in IE9)	 | number | - |
| spin  | Rotate icon with animation	 | boolean | false |

## Custom Svg Icon
You can import SVG icon as an vue component by using vue cli 3 and [vue-svg-loader](https://www.npmjs.com/package/vue-svg-loader). vue-svg-loader's options [reference](https://github.com/visualfanatic/vue-svg-loader).

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-loader')
      .loader('vue-loader') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [{removeViewBox: false}]
        }
      })
  }
}
```
```js
<template>
  <div>
    <icon :component="MessageSvg"></icon>
    <icon :component="MessageSvg" width="60" height="60"></icon>
    <icon :component="MessageSvg" width="60" height="60" :rotate="45"></icon>
    <icon :component="MessageSvg" width="60" height="60" spin></icon>
    <icon :component="MessageSvg" width="60" height="60"  @click="clickHandler"></icon>
  </div>
</template>

<script>
  import Icon from '@enmo-design/icons';
  import MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.

  export default {
    components: { Icon },
    data () {
      return {
        MessageSvg
      }
    }
  }
</script>
```
#### Supported props

|  Property   | Description  | Type | Default
|  :-  | :-  |  :-  | :-  |
| component  | 	SVG icon component load by vue-svg-loader | vue component | - |
| width  | The width of the svg element	 | string \| number | '1em' |
| height  | The height of the svg element	 | string \| number | '1em' |
| rotate  | Rotate degrees (not working in IE9)	 | number | - |
| spin  | Rotate icon with animation	 | boolean | false |