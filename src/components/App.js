import React, { useReducer } from 'react';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers';
import { /*addOne,*/ applyNumber, changeOperation, clearDisplay, setMemory, applyMemory, clearMemory } from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { memory, operation, total } = state

  // const onClickAddOne = () => {
  //   dispatch(addOne())
  // }
  const onClickNums = evt => {
    const number = evt.target.value
    dispatch(applyNumber(number))
  }

  const onClickOperator = evt => {
    const operator = evt.target.value
    dispatch(changeOperation(operator))
  }

  const onClickClear = () => {
    dispatch(clearDisplay())
  }

  const memorySet = () => {
    dispatch(setMemory())
  }
  
  const memoryApply = () => {
    dispatch(applyMemory())
  }

  const memoryClear = () => {
    dispatch(clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {operation}</span>
              <span id="memory"><b>Memory:</b> {memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={memorySet}/>
              <CalcButton value={"MR"} onClick={memoryApply}/>
              <CalcButton value={"MC"} onClick={memoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={onClickNums}/>
              <CalcButton value={2} onClick={onClickNums}/>
              <CalcButton value={3} onClick={onClickNums}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={onClickNums}/>
              <CalcButton value={5} onClick={onClickNums}/>
              <CalcButton value={6} onClick={onClickNums}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={onClickNums}/>
              <CalcButton value={8} onClick={onClickNums}/>
              <CalcButton value={9} onClick={onClickNums}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={onClickOperator}/>
              <CalcButton value={"*"} onClick={onClickOperator}/>
              <CalcButton value={"-"} onClick={onClickOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={onClickClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
