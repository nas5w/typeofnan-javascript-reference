---
title: "the Array.from method"
linkname: "Array.from()"
path: "/array-from"
category: "Array"
description: "The Array.from method creates a new array from an array-like or iterable object. Array.from creates a _shallow_ copy."
ref: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
---

<!-- prettier-ignore-start -->

## Create an array called `arr`.

```javascript content
const arr = [1, 2, 3];
```

## Create a shallow copy of `arr` and assign it into `arr2`.

```javascript start
const arr = [1, 2, 3];
```

```javascript content
const arr2 = Array.from(arr);
```

## `console.log` the new array.

```javascript start
const arr = [1, 2, 3];
const arr2 = Array.from(arr);
```

```javascript content
console.log(arr2);
```

```javascript after
// [1, 2, 3];
```

## Strings are iterable too! Use `Array.from` on the string `"hello"` and log it.


```javascript start
const arr = [1, 2, 3];
const arr2 = Array.from(arr);
console.log(arr2);
// [1, 2, 3];
```

```javascript content
console.log(Array.from("hello"));
```

```javascript after
// ["h", "e", "l", "l", "o"];
```

<!-- prettier-ignore-end -->
