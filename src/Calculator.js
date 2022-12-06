import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

var ope
function Calculator() {
    const [fval, setfvalue] = useState('')
    const [sval, setsvalue] = useState('')
    const [operator, setoperator] = useState('')

    const handlerbtn = (m) => {
        // alert(m.target.value)
        setfvalue(fval + m.target.value)

    }
    const signhandler = (x) => {
        // alert(x.target.value)
        ope = x.target.value
        // alert(ope)
        setoperator(ope)
        // setoperator(x.target.value)

        setsvalue(fval)
        setfvalue('')

    }
    const equalhandler = (c) => {
        // alert(c.target.value)
        if (ope == '+') {
            setfvalue(parseInt(sval) + parseInt(fval))
            setfvalue(parseFloat(sval) + parseFloat(fval))
        }
        else if (ope == '-') {
            setfvalue(parseInt(sval) - parseInt(fval))
            setfvalue(parseFloat(sval) - parseFloat(fval))
        }
        else if (ope == '/') {
            setfvalue(parseInt(sval) / parseInt(fval))
            setfvalue(parseFloat(sval) / parseFloat(fval))
        }
        else if (ope == '*') {
            setfvalue(parseInt(sval) * parseInt(fval))
            setfvalue(parseFloat(sval) * parseFloat(fval))
        }
        else if (ope == '%') {
            setfvalue((parseInt(sval) /100) * parseInt(fval))
            // setfvalue(parseInt(sval) % parseInt(fval))
        }

        // setfvalue(eval(ans))
    }
    const clear = () => {
        setfvalue('')
    }
    const back=()=>{
        var v = fval.slice(0,fval.length-1)
        // alert(v)
        setfvalue(v)

    }

    return (
        <>
            <div className="calc text-center mt-4">
                <div className="display">
                    <input type={'text'} className="disp" value={fval}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={"button"} className="btn" value="AC" onClick={clear}></input>
                    <input type={"button"} className="btn" value="C" onClick={back}></input>
                    <input type={"button"} className="btn" value="%" onClick={signhandler}></input>
                    <input type={'button'} className="sign" value="*" onClick={signhandler}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="7" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="8" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="9" onClick={handlerbtn}></input>
                    <input type={'button'} className="sign" value="-" onClick={signhandler}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="4" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="5" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="6" onClick={handlerbtn}></input>
                    <input type={'button'} className="sign" value="/" onClick={signhandler}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="1" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="2" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="3" onClick={handlerbtn}></input>
                    <input type={'button'} className="sign" value="+" onClick={signhandler}></input>
                </div>
                <div className="buttons mt-4 d-flex align-items-center justify-content-center gap-4">
                    <input type={'button'} className="btn" value="00" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="0" onClick={handlerbtn}></input>
                    <input type={'button'} className="btn" value="." onClick={handlerbtn}></input>
                    <input type={'button'} className="sign" value="=" onClick={equalhandler}></input>
                </div>
            </div>
        </>
    )
}

export default Calculator


{/* 
<br></br>


<br></br>


<br></br>


<br></br>


<br></br>

 */}