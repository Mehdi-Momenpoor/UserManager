import React, { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'

export default function App() {
  const initialValue = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]
  const [initVal, setInitVal] = useState(initialValue);

  function handleInc(id) {
    let copyIntval = [...initVal];
    const index = copyIntval.findIndex(x => x.id === id);
    copyIntval[index].value = copyIntval[index].value + 1;
    setInitVal(copyIntval);
  }
  function handleDec(id) {
    let copyIntval = [...initVal];
    const index = copyIntval.findIndex(x => x.id === id);
    copyIntval[index].value = copyIntval[index].value - 1;
    setInitVal(copyIntval);
  }
  function handleDel(id) {
    setInitVal(initVal.filter(x => x.id !== id))
  }
  function handleReset() {
    let copyIntval = [...initVal];
    copyIntval.map(x => x.value = 0)
    setInitVal(copyIntval)
  }
  function handleRefresh() {
    setInitVal(initialValue)
  }

  // const counter = initVal.filter(x => x.value > 0).length;
  const counter = initVal.map(item => {
    let sum = null;
    sum += item.value ;
    return sum;
  })

  return (
    <div className='App'>
      <Header counter={counter} />

      <Button onReset={handleReset} disable={initVal.length === 0}>reset</Button>
      <Button onRefresh={handleRefresh} disable={!(initialValue.length - initVal.length >= 1)}>Refresh</Button>
      {
        initVal.map(val =>
          <Counter
            key={val.id}
            value={val.value}
            onInc={() => handleInc(val.id)}
            onDec={() => handleDec(val.id)}
            onDelete={() => handleDel(val.id)}
          />)
      }
    </div>
  )
}
