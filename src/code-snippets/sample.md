---
title: "Array Map"
path: "/array-map"
order: 1
---

## Create an array and call the `map` method.

```javascript content
const arr = [1, 2, 3, 4].map();
```

## Pass a function to the `map` method. In this case, we multiply each element by 2.

```javascript start
const arr = [1, 2, 3, 4].map(
```

```javascript content
el => el * 2;
```

```javascript end
);
```

## console.log the result.

```javascript start
const arr = [1, 2, 3, 4].map(el => el * 2);
```

```javascript content
console.log(arr);
```

```javascript after
// [2, 4, 6, 8]
```
