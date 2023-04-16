import React from 'react'

const Clr = () => {

    const handleKeyPress=(e)=>{
        console.log(e.target.value)
    }
  return (
   <>
    <div>
            <input type="text" KeyPress={(e) => handleKeyPress(e)} />
        </div>
   </>
  )
} 

export default Clr;

// function KeyPressElement() {
//     function handleKeyPress() {
//         console.log( "You pressed a key." )
//     }
  
// }