---
title: "What's `this` in JavaScript?"
date: "2020-09-29T22:12:03.284Z"
description: "Learn concept behind 'this' binding."
---

# this

### What it's not:

- Reference to Itself

One misconception is that `this` refers to the function itself.

```jsx
function foo(n) {
	console.log(n);
	this.count1 += 1;
	foo.count2 += 1;
}

foo.count1 = 0;
foo.count2 = 0;
for(let i = 0; i < 5; i++) {
	foo(i);
}
// Output
// 0 1 2 3 4

// Count of how many times foo() was called
console.log(foo.count1); // 0
console.log(foo.count2); // 5
```

Notice how `count1` does not increment and was still `0` as a result, while `count2` incremented by 1 in each call and gave `5` as result. `foo.count1 = 0` did add a new property to the function object but `count1` does not get incremented because `this` in `this.count1 += 1` does *not* point to the function object. 

Question: *then what was I incrementing* with `this.count1 += 1`? It's actually a global variable `count1` which currently has NaN value.

- Its Scope

Another misconception is that `this` refers to functions scope.

```jsx
function foo(){
	var a = 2;
	this.bar(); 
}
function bar() {
	console.log(this.a);
}
foo(); // ReferenceError: a is not defined
```

This code is an attempt to create a bridge between lexical scopes of `foo` and `bar`, so `bar` gets access to variable `a`. No such bridge is possible. You cannot use `this` to look something in lexical scope.

### What is `this`?

> this keyword refers to an object, that object which is executing the current bit of javascript code.


When a function is invoked an activation record, or execution context, is created. This record keeps the information of where the function was called from (the call stack), how the function was invoked, parameters passed, etc. One of the properties of this record is the `this` reference, which will be used for duration of that function's execution. 

*The environment (or scope) in which the line is being executed is known as the execution context*.

# Understanding `this`

Two important things to remember are:
- `this` is not author-time binding but **a runtime binding**.

- `this` is a binding made for each function based entirely on its **call-site**.

The call-site we care about is in the function before the currently executing function, in [call-stack]([http://latentflip.com/loupe/](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7)) (the stack of functions that has been called to get us to the current moment in execution). To get the real call-site, use a debugger (and set a breakpoint on the function) to get the call-stack, the second item from the top will be the call-site.

## Rules

It follows one of these rule (based on the call-site):

### 1. Default Binding

When no other rules are applicable, then this rule applies.

```jsx
function foo() {
	console.log(this.a);
}

var a = 2;
foo(); //2

// foo() is same as:
// global.foo()  -- for node
// window.foo()  -- for browsers
```

*Variables in the global scope are same as global-object properties* (see last few comments of the code above). `this.a` resolves to global variable `a` because *execution context* by default is global object. 

How do we know *default binding* applies here? We look at the `foo()` call-site to see *how* it is called. Its a plain, undecorated function reference, so none of the other rules will apply.

If the function `foo` is running in `strict mode`, the global object is not eligible for default binding. It will give an error of '`this' is 'undefined'`. If the function's call-site is running in `strict mode`, then it will run without error.

### 2. Implicit Binding

Call-site has a context object.

```jsx
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2,
	foo: foo
}
obj.foo(); // 2
```

Regardless of whether `foo()` is initially declared *on* foo or added it as a reference later, it isn't owned by `obj` object. But when the call-site uses `obj` context to reference it, then we can say it is "owned" by `obj`. The *implicit binding* says that when there is a context object then that object becomes *this* object or execution context object for that method. `obj.a` is same as `this.a`.

Only the top/last level of an object property reference chains matters to call-site:

```jsx
function foo() {
	console.log(this.a);
}  
obj1 = {
	a: 42,
	foo: foo
};
obj2 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo(); // 42
```

#### Implicitly lost

```jsx
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2,
	foo: foo
}
var bar = obj.foo;
var a = "oops, global";
bar(); // "oops, global"
```

Even though `bar` is reference to `[obj.foo](http://obj.foo)` , in fact it's really a reference to `foo` itself. Also, the call-site matters and it doesn't have a context object so default *binding* applies.

```jsx
function foo() {
	console.log(this.a);
} 
function doFoo(fn) {
	fn();
}

ar obj = {
	a: 2,
	foo: foo
}
var a = "oops, global";
doFoo(obj.foo); // "oops, global"
setTimeout(obj.foo, 1000); // "oops, global"
```

Parameters passing is just an implicit assignment, so the end result is same as the previous snippet. The passed parameter `fn` refer to `foo` rather than `obj.foo`.

It's common that our function callbacks *lose* their *this* binding.

### 3. Explicit Binding

If we use `call` and `apply` method with calling function, both of those methods take as their first parameter as execution context. That is *this* binding.

```jsx
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2
}
foo.call(obj); // 2
```

Invoking `foo` with *explicit binding* by `foo.call(...)` allows us to force its *this* to be `obj`. If you pass a simple primitive value (type of string, boolean, number) as *this* binding, the primitive type is wrapped in it's object form (new String(..), new Boolean(..), or new Number(..)). This is called "boxing".

#### Hard Binding

We can solve the function callback problem in implicit binding by using `call()` or `apply()`

```jsx
function foo() {
	console.log(this.a);
}
var obj = {
	a: 2
}
var bar = function() {
	foo.call(obj);
}
bar(); // 2
setTimeout(bar, 1000); // 2

// hard-bound `bar` can't have its this overridden
bar.call(window); // 2
```

ES5 had a built-in utility for hard binding as `Function.prototype.bind` and it's used like:

```jsx
function foo(something) {
	console.log(this.a, something);
	return this.a + something;
}
var obj = {
	a: 2
}
var bar = foo.bind(obj);
var b = bar(3); // 2 3
console.log(b); // 5

// built-in `bind` does something like this:
// function bind(fn, o) {
//	return function() {
//		return fn.apply(obj, arguments);
//	}
// }
// bind(foo, obj)
```

`bind(..)` returns a new function that is hardcoded to call original function with *this* context specified.

### 4. new Binding

In traditional class-oriented languages, "constructors" are special class methods that are instantiated with a *new* operator. Like `something = new someClass(..);`.

But there is no connection to class-oriented *new* with JavaScript's *new.* In JS, constructors are normal functions that happen to be called with *new* operator in front of them.

So, any function, including the built-in functions like `Number(..)`, can be called with a *new* in front of it and that makes that function call a **constructor call**.

When a function is invoked with *new* (a construction call), following things happen:

- A brand new object is created.
- The newly constructed object is `[[Prototype]]`-linked. (not discussed in this blog)
- The newly constructed object is set as the *this* binding for that function call.
- Unless the function returns its own object, the new-invoked function call automatically returns the newly constructed object.

```jsx
function foo(a) {
	this.a = a;
}
var bar = new foo(2);
console.log(bar.a); 
```

By calling `foo()` with *new* in front of it, we constructed a new object and set that object as *this* for the call of `foo()`. This is how a function's call *this* can be bound.

### Rules in order

Let's see what order to apply these rules in.

new > explicit binding > implicit binding > default binding

So look at the call-site and ask:

1. Called with `new`? Use the newly constructed object.
2. Called with `call` or `apply` (or `bind`)? Use the specified object.
3. Called with a context object owning the call? Use that context object.
4. Default: `undefined` in strict mode, `global` object otherwise. 

## Binding Exceptions

There are some exceptions to these rules:
### Ignored this

If you pass `null` or `undefined` as *this* binding parameter to `call`, `apply`, or `bind`, then those values are ignored and *default binding* rule applies.

```jsx
function foo() {
	console.log(this.a);
}
var a = 2;

foo.call(null); // 2
```

Why would we pass `null` for *this* binding? In ES5, to spread array of values as parameters in a function call we use `apply(..)` or to curry parameters `bind(..)` is helpful. Example: `foo.apply(null, [2, 3])`. It sends `[2, 3]` as parameters to `foo`. In the function `foo`, we might not care about *this* so we pass `null`. But there might a danger in using `null` when we don't care about `this` binding like for a third-party library function that you don't control *might* use a *this* reference and accidently call the global object because of *default binding*. So, it can cause variety of bugs that would be very difficult to diagnose.

A safer way is to make an object, a completely empty nondelegated object, and we pass this object for ignored *this* binding we don't care about to ensure any unexpected usage of *this* will be restricted to this empty object. The easiest way to set it up as totally empty is `Object.create(null)` which is similar to `{ }`, but without delegation to `Object.prototype` so it's more empty than just `{ }`.

```js
function foo() {
    console.log(a, b);
}
var empty = Object.create(null);

// spreading out array as parameters
foo.apply(empty, [2, 3]); // 2 3

// currying with bind(..)
var bar = foo.bind(empty, 2);
bar(3); // 2 3 
```

### Indirection

Another thing to be aware of is that you can create "indirect references" to functions, and then when that function reference is invoked and the *default binding* rule applies.

```js
function foo() {
    console.log(this.a);
}
var a = 2;
var o = { a: 3, foo: foo};
var p = { a: 4 };

o.foo(); //3
(p.foo = o.foo)(); //2
```
The result value of expression `p.foo = o.foo` is a reference to just underlying function object, so the effective call-site is just `foo()`, not `p.foo()` or `o.foo()`. Hence, as per the rules *default binding* applies.

## Arrow functions
ES6 introduced arrow functions, that uses so-called "fat-arrow" operators, `=>`. Instead of using the four standard *this* rules, it adopts *this* binding from enclosing scope.

```js
function foo() {
    return (a) => {
        console.log(this.a);
    }
}

var obj1 = { a: 2 };
var obj2 = { a: 3 };

var bar = foo.call(obj1);
// hard-binding the arrow function returned
bar.call(obj2); // 2, not 3!
```
When a fat arrow is used, it doesn’t create a new value for *this*. *this* keeps on referring to the same object it’s referring to outside of the function.

Instead of binding *this*, you can choose to use lexical scope by defining `var self = this` inside the `foo` function and inside the arrow function using `self.a` instead of `this.a`. This avoids using `bind(..)`.

Arrow functions are essentially disabling the traditional *this* mechanism to favor lexical scoping. So, it adviable to choose to either use lexical scope or *this*-style  machanisms, inside same function, and not use both as it makes it harder to maintain code. 
## References

- You Don't Know JS: this and object Prototype
- [https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8](https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
- [https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c](https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c)

