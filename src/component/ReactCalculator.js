import "./Calculator.css"
import { useState } from "react"

const ReactCalculator = function(){
    // ------------State management item-------------------
    const [previousValue, setPreviousValue] = useState("0")
    const [currentValue, setCurrentValue] = useState("0")
    const [operator, setOperator] = useState(null)
    const [result, setResult] = useState(null)
    // ------------Event Handling functions-------------------
    const handleClick=(event)=>{
        let buttonClass = event.target.className
        let buttonValue = event.target.innerHTML
        switch (buttonClass) {
            case "numbers":
               if (currentValue === '0'){
                    setCurrentValue(buttonValue)
                }else{
                    setCurrentValue(currentValue + buttonValue)
               }
                break;
            case "operator":
                if (operator === null){
                    setPreviousValue(currentValue)
                    setCurrentValue("0")
                    setOperator(buttonValue)
                }else{
                    handleEvaluation()
                    setOperator(buttonValue)
                }
                break;
            case "dot":
                if (currentValue.includes(".")){
                    return
                }else{
                    setCurrentValue(currentValue + buttonValue)
                }
                break;
            case "eval":
                handleEvaluation()
                break;
            case "modifier":
                if (buttonValue === 'CLR'){
                    setCurrentValue("0")
                    setPreviousValue("0")
                    setResult(null)
                    setOperator(null)
                }else{
                    setCurrentValue((currentValue)=>setCurrentValue(currentValue.slice(0, -1)))
                }
                break;
            default:
                alert("its a special one")
                break;
        }
    }
    const handleEvaluation = ()=>{
        let first = parseFloat(previousValue)
        let second = parseFloat(currentValue)
        switch (operator) {
            case "*":
                setResult(first * second)
                break;
            case "+":
                setResult(first + second)
                break;
            case "-":
                setResult(first - second)
                break;
            case "/":
                setResult(first / second)
                break;
            default:
                break;
        }
        setCurrentValue(result.toString())
        setPreviousValue("0")
        setOperator(null)
    }
    // ------------Event Handling functions-------------------
    return(
        <div className="mainContainer">
            <div className="container">
                <div className="displayScreen">
                    <div className="preValue">
                        <h4>{previousValue}</h4>
                    </div>
                    <div className="curValue">
                        <h1>{currentValue}</h1>
                    </div>
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
                        <button className="dot" onClick={handleClick}>.</button>
                        <button className="numbers" onClick={handleClick}>0</button>
                        <button className="eval" onClick={handleClick}>=</button>
                        <button className="operator" onClick={handleClick}>/</button>
                    </div>
                    <div className="eachButton">
                        <button className="modifier" onClick={handleClick}>CLR</button>
                        <button className="modifier" onClick={handleClick}>BSP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactCalculator