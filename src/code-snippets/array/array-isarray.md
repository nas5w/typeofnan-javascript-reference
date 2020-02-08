---
title: "the Array.isArray method"
linkname: "Array.isArray()"
path: "/array/is-array"
category: "Array"
description: "The Array.isArray method checks if the argument passed to it is an Array. If it is, isArray returns true. If not, it returns false."
ref: ""
---

<!-- prettier-ignore-start -->

## Create the string `"Hello world"` and assign it into the variable `str`. Then, create the array `[1, 2, 3]` and assign it into the variable `arr`.

```javascript content
const str = "Hello world";
const arr = [1, 2, 3];
```

## Call `Array.isArray` on both `str` and `arr` and `console.log` the result.

```javascript start
const str = "Hello world";
const arr = [1, 2, 3];
```

```javascript content
console.log(
  Array.isArray(str),
  Array.isArray(arr)
);
```

```javascript after
// false true
```

<!-- prettier-ignore-end -->
