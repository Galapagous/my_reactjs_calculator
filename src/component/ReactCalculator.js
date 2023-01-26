import "./Calculator.css"
import { useState } from "react"

const ReactCalculator = function(){
    const [currentValue, setCurrentValue]= useState("0")
    const [previousValue, setPreviousValue]= useState("0")
    const [operator, setOperator] = useState(null)
    const handleClick=(event)=>{
        let buttonValue = event.target.innerHTML
        let buttonClass = event.target.className
        switch (buttonClass) {
            case "number":
                if (currentValue === "0"){
                    setCurrentValue(buttonValue)
                }else{
                    setCurrentValue(currentValue.concat(buttonValue))
                }
                break;
            case "modifier":
                if (buttonValue === "RESET"){
                    setCurrentValue("0")
                    setPreviousValue("0")
                    setOperator(null)
                }else if(buttonValue === "DEL"){
                    alert("delete requested")
                    if (currentValue.length === 1 && currentValue === "0"){
                        setCurrentValue("0")
                        setPreviousValue("0")
                        setOperator(null)
                    }else if(currentValue.length === 1){
                        setCurrentValue("0")
                    }else{
                        setCurrentValue(currentValue.slice(0, -1))
                    }
                }
                break;
                case "operator":
                    if (operator === null){
                        setOperator(buttonValue)
                        setPreviousValue(currentValue)
                        setCurrentValue("0")
                    }else{
                        handleEvaluation()
                        setOperator(buttonValue)
                    }
                    break;
                    case "dot":
                        if(!currentValue.includes(".")){
                            setCurrentValue(currentValue.concat(buttonValue))
                        }
                        break;
                    case "evaluate":
                        handleEvaluation()
                        break;
            default:

                break;
        }   
    }
    const handleEvaluation = ()=>{
        let firstNumber = parseFloat(previousValue)
        let secondNumber = parseFloat(currentValue)
        switch (operator) {
            case "x":
                setPreviousValue((firstNumber * secondNumber).toString())
                break;
            case "÷":
                setPreviousValue((firstNumber / secondNumber).toString())
                break;
            case "+":
                setPreviousValue((firstNumber + secondNumber).toString())
                break;
            case "-":
                setPreviousValue((firstNumber - secondNumber).toString())
                break;
            default:
                break;
        }
        setCurrentValue("0")
    }
    return(
        <div className="main-container">
            <div className="calc-container">
                <div className="display">
                    <div className="prev">
                        <h5>{previousValue}</h5>
                    </div>
                    <div className="curr">
                        <h2>{currentValue}</h2>
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