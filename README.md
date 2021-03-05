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
  </div>
</template>

<script>
  import { SmileOutlined } from '@enmo-design/icons';

  export default {
    components: { SmileOutlined }
  }
</script>
```

## Component Props

### width / height

Specify the size of icon. Default value is 16px / 16px. Default unit is px

```js
<template>
  <div>
    <smile-outlined width="60" height="60"></smile-outlined>
  </div>
</template>

<script>
  import { SmileOutlined } from '@enmo-design/icons';

  export default {
    components: { SmileOutlined }
  }
</script>
```

### original

use icon original color

```js
<template>
  <div>
    <smile-outlined width="60" height="60" original></smile-outlined>
  </div>
</template>

<script>
  import { SmileOutlined } from '@enmo-design/icons';

  export default {
    components: { SmileOutlined }
  }
</script>
```
