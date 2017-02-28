# vue-render-loader
Vue2 render loader for webpack2 && typescript2.

### Example
component.html
``` html
<div>{{ text }}</div>
```

component.ts
``` typescript
import render from './component.html';
import { Vue, Component } from 'vue-class'; 

@Component({ 
  render,
  props: ['text']
})
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
