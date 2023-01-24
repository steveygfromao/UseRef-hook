# useRef Hook Example

# Description / Introduction

Simple example of using the useRef hook.  This sets the focus on the input text element.

The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly like we would normally do in Javascript (document.getElementById etc)

# Usage

`npm install`

#
`npm start`

#
Browse to localhost:3000

To use the useRef hook, simply bring it in:

```javascript
import {useRef} from 'react'
```

Set up the reference:

```javascript
const inputRef = useRef(null);
```

Generally we use the reference inside the useEffect hook - here I am setting the focus to the inputRef created above:

```javascript
useEffect(()=>{
      inputRef.current.focus();
},[])
```

This component returns the following - not the use of the ref keyword which takes in the inputRef reference we created earlier:

```javascript
return (
    <div>
      <input ref={inputRef} placeholder='enter text' type='text'/>
    </div>
  )
```

We now have access to the input box through the inputRef reference.  










