---
title: "the Array.some method"
linkname: "Array.some()"
path: "/array/some"
category: "Array"
description: The Array some method iterates through your array and tests each element with the provided function. If the element passes, the next element is tested. If all elements pass, the method returns true. As soon as one element fails the test, the method returns false.
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
---

<!-- prettier-ignore-start -->

## Create an array and call the `some` method.

```javascript content
const result = [1, 2, 3, 4].some();
```

## Pass a function to the `some` method. In this case, we check if _any_ of the elements are less than 4.

```javascript start
const result = [1, 2, 3, 4].some(
```

```javascript content
  el => el < 4
```

```javascript end
);
```

## `console.log` the result.

```javascript start
const result = [1, 2, 3, 4].some(
  el => el < 4
);
```

```javascript content
console.log(result);
```

```javascript after
// true
```

<!-- prettier-ignore-end -->
