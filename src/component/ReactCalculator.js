import "./Calculator.css"

const ReactCalculator = function(){
    return(
        <div className="mainContainer">
            <div className="container">
                <div className="displayScreen">
                    <h1>7 x 7 = 49</h1>
                </div>
                <div className="buttons">
                    <div className="eachButton">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>+</button>
                    </div>
                    <div className="eachButton">
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>-</button>
                    </div>
                    <div className="eachButton">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>*</button>
                    </div>
                    <div className="eachButton">
                        <button className="special">C</button>
                        <button>0</button>
                        <button className="special">=</button>
                        <button>/</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactCalculator