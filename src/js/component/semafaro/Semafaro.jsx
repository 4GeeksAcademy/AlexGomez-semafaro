import React,{useState} from 'react';
import "./semafaro.css";
const Semafaro = () => {
    const [color, setColor] = useState("");
    const [estilo, setEstilo] = useState("");
    const [arrColor, setArrColor] = useState(["red", "yellow", "green"]);
    

    const addRed = () => {
        setColor("red");
    };

    const addYellow = () => {
        setColor("yellow");
    };
    const addGreen = () => {
        setColor("green");
    };

    const addLightDiv = () => {
        
        setColor("purpura");
        setEstilo("purpura light ");   
    };
   const removeLightDiv = () => {
        setColor("");
        setEstilo("");
   }
  
   const intervalCambio =()=>{
    
    arrColor.forEach((item, index) => {
        setTimeout(() => {
            setColor(item);
        }, index * 2000);
    })
}

    const turnON = () => {
       
           setInterval(() => {
                intervalCambio();
           }, 3000);
}
    return (
        <>
        <div className="container d-flex justify-content-center align-content-center w-100 mt-5">
            <div className='trafficTop'></div>
            <div className="semafaro ">
                <div className={ color=="red"? "red light selected":"red light"} onClick={addRed}></div>
                <div className={ color=="yellow"? "yellow light selected":"yellow light"} onClick={addYellow}></div>
                <div className={color=="green"?  "green light selected":"green light"} onClick={addGreen}></div>
                <div className={color=="purpura"? "purpura light selected ": estilo} onClick={addLightDiv}></div>
            </div>
            
        </div>
        <div className='d-flex justify-content-center gap-5'>
            <button onClick={turnON} className="btn w-25 btn-primary mt-5">Encender</button>
            <button onClick={removeLightDiv} className="btn w-25 btn-danger mt-5">Quitar Luz Purpura</button>
            <button onClick={addLightDiv} className="btn w-25 btn-primary mt-5">Agregar Luz Purpura</button>
       
        </div>
        </>
    );
};

export default Semafaro;