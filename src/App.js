import React from 'react'
import { useState } from 'react';



const App = () => {

  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    if (!inputdata) {

    }
    else {
      setItems([...items, inputdata]);
      setInputdata("");
    }

  }

  const handleDelete = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });

    setItems(updateditems);
  }

  const removeAll = () => {
    setItems([]);
  }
  return (
    <>
      <div id='main'>
        <div>Add your list here</div>
        <div>
          <input type="text" placeholder='write here' value={inputdata}
            onChange={(evt) => setInputdata(evt.target.value)}
          />
          <button onClick={handleClick}>Add</button>
        </div>

        <div>
          {
            items.map((elem, ind) => {
              return (
                <>
                  <div key={ind} >
                    {ind + 1}  {elem}
                    <button onClick={() => handleDelete(ind)}>Dlt</button>
                  </div>
                </>
              )
            })


          }


        </div>

        <div>
          <button onClick={removeAll}>check list</button>
        </div>
      </div>
    </>
  )
}

export default App;
