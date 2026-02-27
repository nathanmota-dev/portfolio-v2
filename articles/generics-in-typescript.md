---
title: "TypeScript: Advanced Generics and Conditional Types"
date: "2024-10-22"
tags: ["typescript", "generics", "types"]
description: "Learn about advanced generics and conditional types in TypeScript to improve the safety and flexibility of your code."
---

TypeScript is a powerful language that brings static typing to JavaScript, allowing developers to write safer and more scalable code. Among the most important features of TypeScript are **generics** and **conditional types**. In this post, we will explore how to use these concepts to improve the quality of your code.

### What Are Generics?

Generics allow you to write functions and classes that work with different types without losing type safety. This is especially useful when you don’t know in advance which type will be used.

#### Example of Generics

Let’s consider a simple function that returns the first element of an array:

```typescript
function firstElement<T>(array: T[]): T | undefined {
    return array[0];
}

const numberValue = firstElement([1, 2, 3]); // type: number
const textValue = firstElement(['a', 'b', 'c']); // type: string
````

### Conditional Types

Conditional types in TypeScript allow you to define types based on a condition. The basic syntax is `A extends B ? C : D`, where if `A` is a subtype of `B`, the resulting type will be `C`; otherwise, it will be `D`.

#### Example of Conditional Types

Let’s create a type that returns `true` if the type is an array and `false` otherwise:

```typescript
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<number[]>; // type: true
type Test2 = IsArray<number>; // type: false
```

### Combining Generics and Conditional Types

You can combine generics and conditional types to create more dynamic functions. See the example below, where we create a function that accepts an array and returns the type of its first element:

```typescript
function typeOfFirstElement<T>(array: T[]): T extends (infer U)[] ? U : never {
    return array[0] as any;
}

const type1 = typeOfFirstElement([1, 2, 3]); // type: number
const type2 = typeOfFirstElement(['a', 'b', 'c']); // type: string
```

### Conclusion

Advanced generics and conditional types in TypeScript are powerful tools that allow you to write more flexible and safer code. By mastering these concepts, you can significantly improve the quality and maintainability of your code.
