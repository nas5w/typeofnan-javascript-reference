---
title: "the Object.entries method"
linkname: "Object.entries()"
path: "/object/entries"
category: "Object"
description: "The Object.entries method takes an object as an argument and returns an array of two element arrays: the first element is an object key and the second element is the value for that key. Object.entries returns enumerable own properties and properties from the prototype chain."
ref: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
---

<!-- prettier-ignore-start -->

## Create a `person` object.

```javascript content
const person = {
  name: "Bob",
  age: 39
};
```

## Call `Object.entries` on that person object and assign it into a new variable.

```javascript start
const person = {
  name: "Bob",
  age: 39
};
```

```javascript content
const entries = Object.entries(person);
```

## `console.log` the entries.

```javascript start
const person = {
  name: "Bob",
  age: 39
};
const entries = Object.entries(person);
```

```javascript content
console.log(entries);
```

```javascript after
// [
//   ["name", "Bob"],
//   ["age", 39]
// ]
```

<!-- prettier-ignore-end -->
