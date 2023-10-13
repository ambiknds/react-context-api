## useContext
useContext is a React Hook that lets you read and subscribe to context from your component.

const value = useContext(SomeContext)

In order to use the Context in a child component, we need to access it using the useContext Hook.

First, include the useContext in the import statement:

import { useState, createContext, useContext } from "react";
Then you can access the user Context in all components:

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

Call useContext at the top level of your component to read and subscribe to context.

import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
See more examples below.

Parameters 
SomeContext: The context that you’ve previously created with createContext. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.
Returns 
useContext returns the context value for the calling component. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree. If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.


React Context
React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

The Problem
State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

Even though components 2-4 did not need the state, they had to pass the state along so that it could reach component 5.