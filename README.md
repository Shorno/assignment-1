# Types vs Interfaces in TypeScript: The Real-World Differences


### The Basics: How You Write Them

Interfaces use the `interface` keyword, and they're really meant for describing objects:

```typescript
interface Point { x: number; y: number; }
```

Type aliases use the `type` keyword, and they're more flexible - you can use them for primitives, unions, tuples, pretty much anything:

```typescript
type ID = string | number;  // Can't do this with interfaces!
type Point = { x: number; y: number; };
```

### The Big Difference: Extensibility

Here's something that often catches TypeScript newcomers by surprise:

Interfaces are "open" - you can add to them later. This is super useful for libraries where you want users to be able to extend your stuff:

```typescript
interface User { name: string; }
// Somewhere else in your codebase or even another file
interface User { email: string; } // This works! Now User has both properties
```

Types are "closed" - once you define them, that's it. Try to redefine one and TypeScript will yell at you.

### When Types Shine: Unions & Tuples

Types become essential when working with:

- Union types: `type Result = Success | Error;`
- Tuple types: `type Coordinates = [number, number];`

Interfaces just can't do these things directly.

### They Play Well Together

You can extend types with interfaces and vice versa:

```typescript
interface BasicUser { id: number; }
type FullUser = BasicUser & { profile: Profile };
```

---

# Any, Unknown, Never: The TypeScript Safety Spectrum

Many developers start by throwing `any` everywhere when TypeScript complains, until someone explains the alternatives. Here's what every TypeScript developer wishes they'd known sooner:

## `any`: The Wild West

It's basically turning off TypeScript. Anything goes! You can:
- Assign it anything
- Access any property
- Call it as a function
- Treat it however you want

```typescript
let data: any = "hello";
data.push(4);  // No error, but will fail at runtime!
```

It's useful when integrating with old JavaScript or when prototyping and you don't want the compiler interrupting your flow. But it's a little like disabling your seatbelt.

## `unknown`: Trust But Verify

This is what should be used instead of `any` in most cases. It's like saying "We don't know what this is yet, but we'll check before using it."

```typescript
let userInput: unknown = getUserInput();

// Won't work until you check the type
userInput.length; // Error!

// Need to verify first
if (typeof userInput === "string") {
    console.log(userInput.length); // Now it works!
}
```

Perfect for API responses, user input, or anything external where you can't be 100% sure of the shape.

## `never`: The Impossible Type

This one takes time to fully grasp. It represents something that should never happen - like a function that always throws an error or an infinite loop.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```


