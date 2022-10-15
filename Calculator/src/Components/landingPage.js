import "./landingPage.css";
import {useState} from "react"
let LandingPage=()=>{
    const [data,setData]=useState([]);
    const seven=()=>{
        setData(data+"7")
    }
    let eight=()=>{
        setData(data+"8")
    }
    let nine=()=>{
        setData(data+"9")
    }
    let sub=()=>{
        setData(data+"-")
    }
    let divide=()=>{
        setData(data+"/")
    }
    let four=()=>{
        setData(data+"4")
    }
    let five=()=>{
        setData(data+"5")
    }
    let six=()=>{
        setData(data+"6")
    }
    let add=()=>{
        setData(data+"+")
    }
    let modul=()=>{
        setData(data+"%")
    }
    let one=()=>{
        setData(data+"1")
    }
    let two=()=>{
        setData(data+"2")
    }
    let three=()=>{
        setData(data+"3")
    }
    let cancel=()=>{
        setData("")
    }
    let multiple=()=>{
        setData(data+"*")
    }
    let zero=()=>{
        setData(data+"0")
    }
    let dot=()=>{
        setData(data+".")
    }
    let evaluate=()=>{
        setData(eval(data))
    }
    let backspace=()=>{
        let final=data.slice(0,data.length-1);
        setData(final)
    }


return(
    <>
    <div className="main">
        <div className="container">
            <h4>Calculator</h4>
            <input className="input" type="text" placeholder="0" value={data}></input>
            <br/>
            <button className="cancel" onClick={cancel}>C</button>
            <button className="cancel" onClick={backspace} >X</button>
            <br/>         
            <button className="numbers" onClick={seven}>7</button>
            <button className="numbers" onClick={eight}>8</button>
            <button className="numbers" onClick={nine}>9</button>
            <button className="divide" onClick={sub}>-</button>
            <button className="divide" onClick={divide}>/</button>
            <br/>
            <button className="numbers" onClick={four}>4</button>
            <button className="numbers" onClick={five}>5</button>
            <button className="numbers" onClick={six}>6</button>
            <button className="add" onClick={add}>+</button>
            <button className="divide" onClick={modul}>%</button>
            <br/>
            <button className="numbers" onClick={one}>1</button>
            <button className="numbers" onClick={two}>2</button>
            <button className="numbers" onClick={three}>3</button>
            <button className="divide"onClick={dot}>.</button>
            <button className="divide" onClick={multiple}>*</button>
            <br/>
            <button className="zero" onClick={zero}>0</button>
            
            <button className="equal" onClick={evaluate}>=</button>
        </div>
    </div>
    </>
)
}
export default LandingPage;