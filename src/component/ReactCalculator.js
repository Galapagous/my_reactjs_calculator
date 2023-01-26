import "./Calculator.css"
import { useState } from "react"

const ReactCalculator = function(){
    const handleClick=()=>{
        alert("hello")
    }
    return(
        <div className="main-container">
            <div className="calc-container">
                <div className="display">
                    <div className="prev">
                        <h5>0</h5>
                    </div>
                    <div className="curr">
                        <h2>0</h2>
                    </div>
                </div>
                <div className="buttons">
                    <div className="button-row">
                        <button className="number" onClick={handleClick}>7</button>
                        <button className="number" onClick={handleClick}>8</button>
                        <button className="number" onClick={handleClick}>9</button>
                        <button style={{backgoundColor:"rgb(1, 21, 39)", color:"white"}} className="modifier" onClick={handleClick}>DEL</button>
                    </div>
                    <div className="button-row">
                        <button className="number" onClick={handleClick}>4</button>
                        <button className="number" onClick={handleClick}>5</button>
                        <button className="number" onClick={handleClick}>6</button>
                        <button className="operator" onClick={handleClick}>+</button>
                    </div>
                    <div className="button-row">
                        <button className="number" onClick={handleClick}>1</button>
                        <button className="number" onClick={handleClick}>2</button>
                        <button className="number" onClick={handleClick}>3</button>
                        <button className="operator" onClick={handleClick}>-</button>
                    </div>
                    <div className="button-row">
                        <button className="dot" onClick={handleClick}>.</button>
                        <button className="number" onClick={handleClick}>0</button>
                        <button className="operator" onClick={handleClick}>÷</button>
                        <button className="operator" onClick={handleClick}>x</button>
                    </div>
                    <div className="button-row">
                        <button style={{ width: "260px", color: "white" }} className="modifier" onClick={handleClick}>RESET</button>
                        <button style={{ width: "260px", color: "white" }} className="evaluate" onClick={handleClick}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactCalculator