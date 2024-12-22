# React useEffect Hook Missing Return Statement

This repository demonstrates a common React bug: a missing return statement in a `useEffect` hook.  This can lead to memory leaks and unexpected behavior if not handled correctly.

## The Bug

The `bug.js` file contains a `MyComponent` that uses the `useEffect` hook to log the count. However, it's missing the crucial `return` statement to clean up the effect.

## The Solution

The `bugSolution.js` file provides the corrected version with a return statement that removes the effect when the component unmounts or when the dependencies change. This prevents memory leaks.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server. 
4. Observe that the original component continues to log even after it is unmounted (or the dependencies change).  The solution correctly handles cleanup.
