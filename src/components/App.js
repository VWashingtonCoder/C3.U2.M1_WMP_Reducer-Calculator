import React, { useReducer } from 'react';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers';
import { /*addOne,*/ applyNumber } from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { memory, operation, total } = state
  
  console.log(total)
  // const onClickAddOne = () => {
  //   dispatch(addOne())
  // }
  const onClick = evt => {
    const number = evt.target.value
    console.log(`total: ${total}, operation: ${operation}, number: ${number}`)
    dispatch(applyNumber(number))
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={onClick}/>
              <CalcButton value={2} onClick={onClick}/>
              <CalcButton value={3} onClick={onClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={onClick}/>
              <CalcButton value={5} onClick={onClick}/>
              <CalcButton value={6} onClick={onClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={onClick}/>
              <CalcButton value={8} onClick={onClick}/>
              <CalcButton value={9} onClick={onClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
