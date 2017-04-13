# EDA t-shirts

The idea is to have some code on the new EDA t-shirts currently being designed. This is inspired by the [dishwashing instructions](dishwashing-instructions.jpg) from [@ahdinosaur](https://github.com/ahdinosaur) and this [little snippet](https://gist.github.com/don-smith/4baa0f45c4aebb8418313146c4b37227) I did for an EDA ad image:

```js
const ids = [4, 9, 1],
o = 'caffeine drink',
e = (r='', n=0) => ids[n] ?
  e(r + o[ids[n]], ++n) : r
console.info(e())
```

The idea is that this code should be relevant to the EDA experience ... and fit on a t-shirt.

This is a pretty awesome suggestion from [@richchurcher](https://github.com/richchurcher):

```js
['diverse',
 'mindful',
 'creative']
.reduce(
  (means, adj) =>
    means + adj[3], ' '
).toUpperCase()
```

And this is a pretty funny one from [@joshuavial](https://github.com/joshuavial):

```js
function coffee (cups) {
  // if (cups > 3) return
  coffee(++cups)
}(1)
```

These are great!
