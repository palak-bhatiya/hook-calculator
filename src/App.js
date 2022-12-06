
import './App.css';
import { useState } from 'react';


var calc
function App() {
    const [fval, setfvalue] = useState('');
    const [sval, setsvalue] = useState('');
    const [operator, setoperator] = useState('');

    const handle = (m) => {
        setfvalue(fval + m.target.value)

    }
    const sign = (x) => {
        calc = x.target.value
        setoperator(calc)
        setsvalue(fval)
        setfvalue('')

    }
    const zero = (p) =>{
        var p1 = p.target.value
        setfvalue(fval+p1)
        if(fval == '0')
        {
            setfvalue('0')
        }
        if(fval == '')
        {
            if(p1 == '00')
            {
                setfvalue('0')
            }
        }
    }
    const equalhandler = (c) => {
        if (calc == '+') {
            setfvalue(parseInt(sval) + parseInt(fval))
            setfvalue(parseFloat(sval) + parseFloat(fval))
        }
        else if (calc == '-') {
            setfvalue(parseInt(sval) - parseInt(fval))
            setfvalue(parseFloat(sval) - parseFloat(fval))
        }
        else if (calc == '/') {
            setfvalue(parseInt(sval) / parseInt(fval))
            setfvalue(parseFloat(sval) / parseFloat(fval))
        }
        else if (calc == '*') {
            setfvalue(parseInt(sval) * parseInt(fval))
            setfvalue(parseFloat(sval) * parseFloat(fval))
        }
        else if (calc == '%') {
            setfvalue((parseInt(sval) /100) * parseInt(fval))
        }
    }
    const clear = () => {
        setfvalue('')
    }
    const back=()=>{
        var v = fval.slice(0,fval.length-1)
        setfvalue(v)

    }
    
    return (
        <>
            <center>
            <div className="calc mt-4">
                <div className="display">
                    <input type={'text'} className="disp" value={fval}></input>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-4">
                    <input type={"button"} className="btn" value="AC" onClick={clear}></input>
                    <input type={"button"} className="btn" value="C" onClick={back}></input>
                    <input type={"button"} className="btn" value="%" onClick={sign}></input>
                    <input type={'button'} className="sign" value="*" onClick={sign}></input>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="7" onClick={handle}></input>
                    <input type={'button'} className="btn" value="8" onClick={handle}></input>
                    <input type={'button'} className="btn" value="9" onClick={handle}></input>
                    <input type={'button'} className="sign" value="-" onClick={sign}></input>
                </div>
                <div className=" d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="4" onClick={handle}></input>
                    <input type={'button'} className="btn" value="5" onClick={handle}></input>
                    <input type={'button'} className="btn" value="6" onClick={handle}></input>
                    <input type={'button'} className="sign" value="/" onClick={sign}></input>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="1" onClick={handle}></input>
                    <input type={'button'} className="btn" value="2" onClick={handle}></input>
                    <input type={'button'} className="btn" value="3" onClick={handle}></input>
                    <input type={'button'} className="sign" value="+" onClick={sign}></input>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="00" onClick={zero}></input>
                    <input type={'button'} className="btn" value="0" onClick={zero}></input>
                    <input type={'button'} className="btn" value="." onClick={handle}></input>
                    <input type={'button'} className="sign" value="=" onClick={equalhandler}></input>
                </div>
            </div>
            </center>
        </>
    )
}

export default App;
