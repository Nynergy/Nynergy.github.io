---
layout: blog-post
title: Tackling Burnout With Lambda Strategies
written: August 19, 2020
meta: Introducing a silly little Haskell program I wrote to combat creative burnout.
category: blog
tags: coding haskell burnout
mastheadClass: masthead-blog
---

In lieu of my recent lack of motivation, I've been getting into functional programming. My experience with programming thus far has been almost entirely imperative, coding mostly in languages like C++, Python, and Java. However, Haskell was a language that really struck me as interesting and elegant, though I found the world of functional programming and declarative code difficult to wrap my head around at first (and I still find it difficult, make no mistake). So, I combined my love of Terminal User Interfaces (TUI) with my burgeoning interest in Haskell, and set out to create a tool that would help me combat things like writer's block or creative burnout.

## The Goal
<hr>

I already knew of the exact kind of tool I was looking for: Brian Eno and Peter Schimdt's [Oblique Strategies](https://en.wikipedia.org/wiki/Oblique_Strategies). You can read more about the nature of _Oblique Strategies_ on its Wikipedia page, but to summarize, it's a deck of cards compiled by Eno and Schmidt that each contain a single cryptic, abstract, or otherwise idiosyncratic phrase. They're meant to be like creative prompts, or the seeds of ideas, ways of changing your thinking when you're in a rut.

The original deck contained such lovely phrases as "_Remove specifics and convert to ambiguities_", "_Turn it upside down_", "_Abandon normal instruments_", and "_(Organic) machinery_". Truly inspiring, I know.

So I decided I wanted to create a TUI program that would serve up a random line like the _Oblique Strategies_ deck. Seems simple, right? An ASCII border around the terminal window, and a single line of text in the center. Something I could whip up in a C++ program with ncurses for breakfast, or something like that.

But how do I interact with the terminal in a functional language like Haskell?

Easy. Throw a brick at it.

## The Implementation
<hr>

No, seriously, use brick. Like, the well-designed TUI library for Haskell, which you can find [here](https://github.com/jtdaugherty/brick). I was floored when I discovered this library. You mean all I have to do is import this library and set up a basic main function that takes a random string to show on screen? Sign me up!

So what follows is the one and only Haskell source file in the program. It's short, it's sweet, and a vast majority of the overhead is taken care of by brick. All I really had to do was implement a way of getting that random line of text. I'm going to go over every line, explaining as if to someone who has never seen Haskell before, so bear with me if you're a functional veteran.

First, we define the Main module in the Main.hs file, and set up all our import statements.

```haskell
module Main where

import Brick
import Brick.Widgets.Center
import Brick.Widgets.Border
import Brick.Widgets.Border.Style

import System.Environment
import System.Random
```

The module definition uses `where` syntax, which is a pretty common keyword in Haskell. The brick imports are pretty self-explanatory, bringing in the code needed for the border and centering the text. The `System.Environment` import is for `getArgs`, which I use later to get a filepath from the user on the command line. `System.Random` allows me to get a random index that I will use to grab a line from the provided file.

The UI is a very simple function that takes a `String` (i.e. the random line being displayed) and returns a `Widget ()`, which is just the type that brick knows how to display on the terminal. It's defined as such:

```haskell
ui :: String -> Widget ()
ui s = withBorderStyle unicode $ border $ center (str s)
```

What's happening here is that `ui` takes `s` as an argument, and constructs the Widget using it. Try reading it from right to left, that helps me understand the way the functions are composed. First, we make a string that brick can operate on with `str s`. Then, we apply `center` to it, which puts it in the center of the Widget. We then apply a `border`, and specify that the border's style should be `unicode`. What we're left with is a Widget that brick can display to the terminal, and that is what we will feed to brick's main function.

Our own main function is simply called `main`, while brick's is called `simpleMain`. Our function looks like this:

```haskell
main :: IO ()
main = do
  args <- getArgs
  case args of
    [] -> putStrLn "USAGE: strategies [FILEPATH]"
    _  -> do
      content <- readFile $ head args
      let strategies = lines content
      idx <- randomRIO (0, length strategies)
      let strategy = strategies !! idx
      simpleMain (ui strategy)
```

It looks scary but it's actually quite simple. Let me walk you through it. `main` is defined as returning an `IO ()`, which just means that `main` can interact with the outside world in an "impure" way. I say "impure" because main is not a "pure" function. If you're curious about the difference, I would look into Haskell and how it handles IO. `main = do` just opens up a block where we can sequence a bunch of IO operations. The first operation is getting the command line arguments from the environment, using `getArgs`, which we bind to a variable called `args`. If the user did not supply any arguments, then this is just an empty list, so we check for that in the case statement. If `args` is empty, we print a usage message to the console and continue (which just exits). If there are arguments, we enter a new `do` block. The `_` syntax is Haskell's pattern matching. Anything that isn't `[]`, or the empty list, will be caught by `_`, and the second case option will be executed. We get the first argument from `args`, which is the filepath we want to read from. At the moment, I do not validate filepaths or handle missing files, incorrect arguments, etc. These will be added in the future. We read the file and bind its contents to `contents`. Contents is one big `String`, so we break it into lines with `lines`, splitting on newline characters, and binding to the `strategies` variable. Next is where the magic happens. Well, it isn't all that impressive, but it's what makes the program random. We use `randomRIO` to get a random number within the range `(0, length strategies)`, and bind it to `idx`. This is the random index we will use to grab a line from `strategies`. And we do just that in the next line, using the `!!` operator to index into the list. Finally, we call brick's `simpleMain` function, providing the Widget returned from our `ui` function (which is being fed the random line, called `strategy`).

And that's it. That's the entire program. You may ask, "But wait, Ben, how do all these functions put things on the screen?" At the moment, I have no clue, that's all done by brick. I just learned how to use the library's interface, and it took care of the rest. And this is only an embarrassingly simple usage of brick. You can peruse its GitHub page to find demo programs, which better show off how powerful and extensible it can be for creating TUIs.

## The Product
<hr>

![alt text](/img/lambda-strategies.jpg?raw=true)

As it stands, the program exists in a GitHub repository [here](https://github.com/Nynergy/lambda-strategies). Feel free to clone it and play around, make requests, file issues, complain about dirty impure code, whatever you like. I'm a novice when it comes to functional programming, so I'm honestly surprised I even got something this simple working. And now I can use it when working on my various creative projects. Others can use it however they like, perhaps as a simple dialog box, though there are countless better ways of implementing that, even with the brick library itself.

If you like the program, or my explanation, or have any thoughts regarding stuff like this, let me know. I don't need to give you my email at this point, you know where you can reach me.

Thanks for reading.

	Ben Buchanan
