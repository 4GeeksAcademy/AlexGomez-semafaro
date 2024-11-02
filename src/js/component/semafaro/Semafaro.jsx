import React,{useState} from 'react';
import "./semafaro.css";
const Semafaro = () => {
    const [color, setColor] = useState("green");
    const [addLight, setAddLight] = useState("");
    const changeColor = () => {
        if (color === "green") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("red");
        } else {
            setColor("green");
        }
    };
    const addLightDiv = () => {
        if (addLight === "purpura") {
            setAddLight("");
            setColor("green");
            return;
        }
        setColor("");
        setAddLight("purpura");
    };
    return (
        <>
        <div className="container d-flex justify-content-center align-content-center w-100 mt-5">
            <div className='trafficTop'></div>
            <div className="semafaro ">
                <div className={color=="red"? "red light selected":"red light"} onClick={changeColor}></div>
                <div className={color=="yellow"? "yellow light selected":"yellow light"} onClick={changeColor}></div>
                <div className={color=="green"? "green light selected":"green light"} onClick={changeColor}></div>
                <div className={addLight=="purpura"? "purpura light selected":"d-none"} onClick={addLightDiv}></div>
            </div>
            
        </div>
        <div className='d-flex justify-content-center gap-5'>
            <button onClick={changeColor} className="btn w-25 btn-primary mt-5">Cambiar</button>
            <button onClick={addLightDiv} className="btn w-25 btn-primary mt-5">Agregar Luz</button>
       
        </div>
        </>
    );
};

export default Semafaro;