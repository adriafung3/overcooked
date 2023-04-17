# p
- `System.out.println`
- `console.log`
- `puts`  
They are all the same: `p`rint text to the terminal. Why not a shorter name?
```javascript
const p = console.log;
p("Hello, World!");
```

# r(...args)
The core function of this project. The reason that the project exists.  

See [n( )](#nls-newline--1) and [s( )](#sstr-sep) below. 
```javascript
p(n(r('const ', s('time open high low close vol'), ' = e[',[0,1,2,3,4,5],'];')));

// const time = e[0];
// const open = e[1];
// const high = e[2];
// const low = e[3];
// const close = e[4];
// const vol = e[5];
```

String formatting is good, but it does not handle arrays well, it just converts them to strings. r( ) takes any number of strings and arrays to return an array of formatted string. You can call r( ) within r( ). Note that r( ) want every array has the same length.  

```javascript
r(s('a b c'),' = ',[1,2], s('x y z'));

// Uncaught Error: Not all arrays have the same size: 3,2,3
```

# n(ls, newline = 1)
r( ) outputs an array, we want a paragraph of string. It is painful to do Array.join('\n') every time. 
```javascript
n(s('a b c'));

// a
// b
// c
```
```javascript
n(s('a b c'), 2);

// a
//
// b
//
// c
```

# s(str, sep = " ")
Again, it is annoying to do String.split() to get an array, even more annoying to hard code a string array. 

```javascript
s('a b c');
// ["a", "b", "c"]
s('a b c ');
// ["a", "b", "c", ""]
```
```javascript
s('this is a line;This is another;BAM', ';');
// ["this is a line", "This is another", "BAM"]
```

# g(array, ...args)
If you use r( ) for several times, you might find the data have patterns as well. Think of it as a repeated `Array.slice( )`.

```javascript
g(s('a b c d e'), 0,0,1,4,[2,5],[1,3])

// ['a', 'a', 'b', 'e', 'c', 'd', 'e', 'b', 'c']
```

# mkv(keyArr, valueArr)
Write a JSON with a key array and a value array. 
```javascript
mkv(s('a b c'), [1, 'example', true]);

// {a: 1, b: 'example', c: true}
```
```javascript
copy(mkv(s('a b c'), [1, 'example', true]));

// undefined
// {
//   "a": 1,
//   "b": "example",
//   "c": true
// }
```

# mpatch(keyArr, ...args)
It is annoying to do mkv( ) for an array of objects. 

See [README](./README.md#talk-is-cheap-example)

# jpath(arr, value = "null")
It will be an overkill to use the 2 functions above to write a deep object. 

```javascript
jpath(s('a b c'), 'example');
// Uncaught SyntaxError: Unexpected token 'e', ..."{"b":{"c":example}}}" is not valid JSON
```
```javascript
copy(jpath(s('a b c'), '"example"'))
// undefined
// {
//   "a": {
//     "b": {
//       "c": "example"
//     }
//   }
// }
```
