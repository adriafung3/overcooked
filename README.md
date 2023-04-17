# Overcooked
## [Demo](Demo.md)
> A JavaScript script with a set of functions that help you program repeated code

We are taught not to write cryptic, [ninja code](https://javascript.info/ninja-code). But people write ninja code because it is fast and brainless to write. And ninja code fits each individual programmer's quirks. How about we write ninja code which generates standardized, readable code?  

There are only a few functions here. If you hate the function name, refactor it. If you hate the implementation, rewrite it. If you want more functionalities, tweak it, extend it. I think anyone is able to code something like this in a cave, with a programming language.  

# Talk is cheap. Example?

You write JSON, don't you?

```json
[
  {"category":"Fruits","price":"$1","stocked":true,"name":"Apple"},
  {"category":"Fruits","price":"$1","stocked":true,"name":"Dragonfruit"},
  {"category":"Fruits","price":"$2","stocked":false,"name":"Passionfruit"},
  {"category":"Vegetables","price":"$2","stocked":true,"name":"Spinach"},
  {"category":"Vegetables","price":"$4","stocked":false,"name":"Pumpkin"},
  {"category":"Vegetables","price":"$1","stocked":true,"name":"Peas"}
]
```

The keys and the curly brackets occur repeatedly. There are many ways to handle them, right? In Vim, do `yy5p` and correct the data line by line? Or write only the data and then do `:substitute` and write a one-time, complex Regular Expression? How about something below? 

```javascript
let bool = [false, true];
copy(mpatch(s('category price stocked name'), g(s('Fruits Vegetables'), 0,0,0,1,1,1), r('$',[1,1,2,2,4,1]), g(bool, 1,1,0,1,0,1), s('Apple Dragonfruit Passionfruit Spinach Pumpkin Peas')))
```

Surely it is ugly and not readable. Because no one except me should read this. Others should read the code that it outputs. But in case you want the meanings of those bad functions: 

- mpatch: "Map" patch. It is indeed a JS object, not Map. But I like it. 
- s: "String".split( ). I don't like ["Fruit", "Vegetables"]
- g: "Get" from an array. 
- r: String formatting with arrays. `r` is just a randomly picked character. 

Nobody writes code this way at work. "Hard-coded" data structures are much faster to process and more readable. But they are also painful to amend. For example, when I write an array of string, I usually mix single quotes and double quotes ("String'). Fewer keystrokes mean smaller chance for errors.  

## Why writing JSON this way
If you have tried to use some programmes of CSV conversion to JSON, they treat each object a row. That makes sense. But Microsoft Excel has trained me to treat things as columns too, so: first header row, then columns.  

Also, it is easy to add another attribute to all elements of the array.  

# Trivials
## But Why?
I hate the libraries and frameworks make me to type tons of boilerplate code, split the data to different parts of the file, the folder or even the whole project. I heard some programmers use scripts to generate boilerplate code and wrapper functions to hide the details. But their works are usually private, and I don't see programmers sharing the code generating scripts on the Internet. I expect this project eventually can provide generic functions for programmers to code customerised scripts to generate boilerplate code. To conclude: public, open code for private, quirky code that generates public code. 

### Text Editor
Why not the code snippet completion? I am using VS Code anyway. 

Like the JSON example above, I hope to gather similar patterns like functions and classes, fill in the data difference, and write them all at once. Most code snippet completion system in IDEs or Text Editors are not "expressive". Write a class, fill it with data, and then write another... But if I need to write 3-4 similar functions, I find it stupid to navigate the cursor here and there. I hope to store the "data" (differences) and "patterns" (similarities), and I can do some "CRUD" to the whole structure.

I may learn how to write a VS Code extension to archieve that, perhaps find a way to mess with the code outline. But I already know how to write Vanilla JS. *In any common computer*, I can easily mix the JS console and \<input\> elements to make an offline, emergency Low Code editor, I just need to find a *"good"* way to combine them. 

### Excel
It takes long time to load, and cursor navigation within a cell expression is painful. 

### Emmet
When I write HTML, I don't see any *coding* way faster than Emmet. I hate to knowing the technicial details of text editors, so I use a bundled Emmet in my folder, call expandAbbreviation() with my own config. 

I wish there were Emmet for other languages. Imagine writing Lisp dialects with `>`, `+`, and `^`. It may not be fast nor readable, but it would be fun. Not only you can call the function and expand the snippets with variables, Emmet's syntax is also very "expressive" ('element[attribute=1]*5{Text $}/'). It has its limitations, but the shorthands are just strings, which are usually easy for tweaking. 

I hope to extend Emmet to fit my requirements, but it takes time to understand the code of Emmet and turn it for other programming languages. 

## Why the name?
It was originally called `Extra Mile`. 
> I'm always willing to go the extra mile to avoid doing something - Jeff Winger (Community Season 3 ep 8)

I like this name. And that's the only thing I liked about the original project. Because the original one is written in Python, I try to name it something related to Python. Then I think of `Rasberry Pi`, `py` -> `pi` -> `pie`. I also want to warn the user don't abuse the functions: It should shorten the code to get the same result, but not **spending more time and more keystrokes**. If you bake too long, you get a burnt pie. I don't like the word `burnt`, hence `overcooked`. It makes no sense, but since I changed the project name, somehow I start to yield some progress.  

I am happy with the progress now, no plan to change the name again.  

## What does "spending more time and more keystrokes" mean?
See an example of bash script
```bash
TERM=xterm-256color
USER=seth
SUDO_EDITOR=emacs
VISUAL=emacs
DISPLAY=:0
PS1=$
```

The code snippet has but 2 repeated characters: `=` and `\n`. There is no way to simplify it.  

It is easy to see that in this example, but when I try to apply the functions to other projects, sometimes I try hard to pack the repeated patterns, just to find out the outputed code is shorter than the script I wrote to generate it. And I spent time to think how to write the script, whereas it is better to type the code all manually.  

I hope you user don't make the same mistake. 
