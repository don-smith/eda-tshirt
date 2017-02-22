# EDA t-shirts

The idea is to have some code on the new EDA t-shirts currently being designed. Inspired my [@ahdinosaur](https://github.com/ahdinosaur)'s [dishwashing instructions](dishwashing-instructions.jpg) and the little snippet below that [@don-smith](https://github.com/don-smith) did for an EDA ad image, the idea is that this code should be relevant to the EDA experience.

This is just a first draft and definitely too much. What should we add/remove? Please send pull requests!


[Another example](https://gist.github.com/don-smith/4baa0f45c4aebb8418313146c4b37227) of _cute code_:

```js
const ids = [4, 9, 1],
o = 'caffeine drink',
e = (r='', n=0) => ids[n] ?
  e(r + o[ids[n]], ++n) : r
console.info(e())
```
