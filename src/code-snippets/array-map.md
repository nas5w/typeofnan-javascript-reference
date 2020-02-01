---
title: "the Array.map method"
linkname: "Array.map()"
path: "/array-map"
category: "Array"
order: 1
---

<!-- prettier-ignore-start -->

## Create an array and call the `map` method.

```javascript content
const arr = [1, 2, 3, 4].map();
```

## Pass a function to the `map` method. In this case, we multiply each element by 2.

```javascript start
const arr = [1, 2, 3, 4].map(
```

```javascript content
  el => el * 2
```

```javascript end
);
```

## `console.log` the result.

```javascript start
const arr = [1, 2, 3, 4].map(
  el => el * 2
);
```

```javascript content
console.log(arr);
```

```javascript after
// [2, 4, 6, 8]
```

<!-- prettier-ignore-end -->
