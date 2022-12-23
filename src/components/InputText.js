import React,{useRef,useEffect} from 'react'


function InputText() {

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[])
    
    return (
    <div>
      <input ref={inputRef} placeholder='enter text' type='text'/>
    </div>
  )
}

export default InputText
