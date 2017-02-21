# vue-render-loader
Vue 2 render loader for webpack && typescript.

### Example
component.html
``` html
<div></div>
```

component.ts
``` typescript
import render from './component.html';
import { Vue, Component } from 'vue-class'; 

@Component({ render })
export default class MyComponent extends Vue {}
```

### Webpack config
``` javascript
module.exports = {
  module: {
    rules: [
      { test: /\.html$/, use: 'vue-render-loader' }
    ]
  }
}
```
