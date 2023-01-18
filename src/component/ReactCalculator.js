import "./reactCalculator.css"

const ReactCalculator = function(){
    return(
        <div>
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
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div className="eachButton"></div>
                    <div className="eachButton"></div>
                </div>
            </div>
        </div>
    )
}

export default ReactCalculator