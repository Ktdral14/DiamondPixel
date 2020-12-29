import React, { useState } from 'react'
import { NavbarPage } from './NavbarPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faFillDrip, faEraser } from '@fortawesome/free-solid-svg-icons'
import html2canvas from 'html2canvas'

export const Designer = () => {
    const offCell = {
        on: false,
        color: '#ffffff'
    }
    const initialCells = Array.from({length: 30*30}, () => offCell);
    const [cells, setCells] = useState(initialCells);
    const [colorActual, setColorActual] = useState('#ffffff');
    const [colores] = useState([
        '#026d5b',
        '#2ba461',
        '#48e387',
        '#8ef2c0',
        '#ffffff',
        '#f8cca7',
        '#fc353c',
        '#f8404c',
        '#ff6c29',
        '#ebbb3b',
        '#efe286',
        '#f4ce90',
        '#ff6bab',
        '#fc70c7',
        '#fbd1df',
        '#a88cd6',
        '#af55d0',
        '#9e33a3',
        '#4dabd1',
        '#548cad',
        '#4db0e9',
        '#73ccee',
        '#0010be',
        '#452586',
        '#000000',
        '#592300',
        '#601706',
        '#ad270c',
        '#c97455',	
        '#b2b2b2',
        '#fe6903',
        '#505050'
    ]);
    const onChangeColor = (value) => {
        console.log(value);
        setColorActual(value);
    }
    const updateCell = (index) => (e) => {
        e.preventDefault();
        if (e.buttons === 1 || e.buttons === 2) {
            setCells(
                cells.map((cell, cellIndex) => {
                if (cellIndex === index) {
                    if (e.buttons === 1) {
                        return {
                            on: true,
                            color: colorActual
                        }
                    }
                    return offCell;
                }
                return cell;
            }));
        }
    };
    const saveCanvas = () => {
        html2canvas(document.getElementById('table'), {backgroundColor: null}).then(canvas => {
            const link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "lienzo.png";
                link.href = canvas.toDataURL("image/png");
                link.target = '_blank';
                link.click();
                document.body.removeChild(link);
        })
    }
    return (
        <>
            <NavbarPage inicio={false} />
            <div id="desinger" className=" h-100 container-fluid padre">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-text-center">
                        <label htmlFor="" className="eslogan2">¡Crea!¡Juega!¡Diseña!</label>
                    </div>
                    <div className="col-12">
                        <div className="current-color" style={{background: colorActual}}></div>
                    </div>
                </div>
                <div className="row content">
                    <div className="col-lg-5 col-md-12 col-sm-6 d-flex justify-content-center imagen">
                        <div id="table" className="grid">
                            { 
                            cells.map((cell, index) =>
                                                    <div 
                                                        style={{background: cell.on ? cell.color: '#ffffff'}} 
                                                        onClick={updateCell(index)} key={index} 
                                                        onMouseDown = {updateCell(index)}
                                                        onMouseOver = {updateCell(index)}
                                                        onContextMenu = {(e) => e.preventDefault()}
                                                        className="cell">
                                                    </div>) 
                            }
                        </div>
                    </div>
                    <div className="col-2  d-flex justify-content-center alig-items-center align-text-center columnaColores">
                        
                        <div className="row">
                        <form className="">
                        <label className="datos3">Herramientas</label>
                            <div className="herramientas">
                            <ul>
                                <li style={{cursor: 'pointer'}} className="mb-3 mt-4"><span><FontAwesomeIcon className="mr-2" icon={faPen} /></span>Click izq</li>
                                <li style={{cursor: 'pointer'}} className="mb-3"><span><FontAwesomeIcon className="mr-2" icon={faEraser} /></span>Click der</li>
                                <li style={{cursor: 'pointer'}} className="mb-3"><span><FontAwesomeIcon className="mr-2" icon={faFillDrip} /></span>Rellenar</li>
                            </ul>
                            </div>
                        </form>
                        </div>
                        
                        <div className="row">
                        <form className="formColores">
                        <label className="datos2">Colores disponibles</label>
                            <div className="herramientas2">
                                <div className="grid-colores">
                                    { 
                                        colores.map((value, key) => 
                                                        <div className="cell-color" 
                                                        key={key}
                                                        style={{background : value, outline: '1px solid ' + value}}
                                                        onClick={() => onChangeColor(value)}>
                                                        </div>) 
                                    }
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        
                    <form className="form-contacto2 align-items-center">
                        <div className="data">
                        <div className="row d-flex justify-content-center mr-3">
                        <label className="align-text-center datos">Datos de entrega</label>
                        </div>
                    
                        <div className="row">
                        
                            <div className="col-11 p-0">
                                <div className="form-group2">
                                    <input type="text" className="form-control" placeholder="Nombre completo"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        
                            <div className="col-11 p-0">
                                <div className="form-group2">
                                    <input type="text" className="form-control" placeholder="Correo electrónico"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        
                            <div className="col-11 p-0">
                                <div className="form-group2">
                                    <input type="text" className="form-control" placeholder="Dirección"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        
                            <div className="col-11 p-0">
                                <div className="form-group2">
                                    <input type="text" className="form-control" placeholder="Telefono"/>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            
                        <div className="text-center col-6">
                            <button className="btn btn-enviar2">Enviar</button>
                        </div>
                        <div className="text-center col-6">
                            <button className="btn btn-enviar2" type="button" onClick= {saveCanvas}>Descargar</button>
                        </div>
                        </div>
                        </div>
                    </form> 
                    </div>
                </div>
            </div>
        </>
    )
}
