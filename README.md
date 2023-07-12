# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @eusoncode/lotide`

**Require it:**

`const _ = require('@eusoncode/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head()`: Creates a function that returns the first element in an array.
- `tail()`: Creates a function that returns the elements in an array except the first.
- `middle()`: Gets the middle item(s) in an array.

- `eqArrays()`: Checks if two arrays are the same or not.
- `assertArraysEqual()`: Asserts that two arrays are the same.
- `eqObjects()`: Checks if two objects are the same or not.
- `assertObjectsEqual()`: Asserts that two objects are the same.
- `assertEqual()`: Asserts that an actual and expected value are the same.

- `countLetters()`: Counts each letter in a sentence.
- `countOnly()`: Counts specified elements in an array.
- `letterPositions()`: Returns all the indices in a sentence for each character except space characters.
- `flatten()`: Converts nested arrays into a single-level array.

- `findKey()`: Scans an object and returns the first key for which the callback fucntions returns a truthy value.
- `findKeyByValue()`: Scans an object and returns the first key containing the given value
- `without()`: Returns a subset of a given array and remove unwanted elements.

- `takeUntil()`: Retrieves items from array until a truthy value is returned by a callback passed to it.
- `map()`: Returns a new array based on the resutls of the callback function passed to it.
