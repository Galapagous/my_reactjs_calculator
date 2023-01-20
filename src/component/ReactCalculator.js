import "./Calculator.css"
import { useState } from "react"

const ReactCalculator = function(){
    const [currentValue, setCurrentValue] = useState(0)
    const handleClick=(event)=>{
        let buttonClass = event.target.className
        let buttonValue = event.target.innerHTML
        switch (buttonClass) {
            case "numbers":
                setCurrentValue(currentValue.toString().concat(buttonValue.toString()))
                break;
            case "operator":
                alert("its an operator")
                break;
            default:
                alert("its a special one")
                break;
        }
    }
    return(
        <div className="mainContainer">
            <div className="container">
                <div className="displayScreen">
                    <h1>{currentValue}</h1>
                </div>
                <div className="buttons">
                    <div className="eachButton">
                        <button className="numbers" onClick={handleClick}>1</button>
                        <button className="numbers" onClick={handleClick}>2</button>
                        <button className="numbers" onClick={handleClick}>3</button>
                        <button className="operator" onClick={handleClick}>+</button>
                    </div>
                    <div className="eachButton">
                        <button className="numbers" onClick={handleClick}>4</button>
                        <button className="numbers" onClick={handleClick}>5</button>
                        <button className="numbers" onClick={handleClick}>6</button>
                        <button className="operator" onClick={handleClick}>-</button>
                    </div>
                    <div className="eachButton">
                        <button className="numbers" onClick={handleClick}>7</button>
                        <button className="numbers" onClick={handleClick}>8</button>
                        <button className="numbers" onClick={handleClick}>9</button>
                        <button className="operator" onClick={handleClick}>*</button>
                    </div>
                    <div className="eachButton">
                        <button className="special" onClick={handleClick}>C</button>
                        <button className="numbers" onClick={handleClick}>0</button>
                        <button className="special" onClick={handleClick}>=</button>
                        <button className="operator" onClick={handleClick}>/</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactCalculator