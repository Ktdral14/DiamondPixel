import React, { useState } from 'react'
import { NavbarPage } from './NavbarPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faEraser, faTimes } from '@fortawesome/free-solid-svg-icons'
import html2canvas from 'html2canvas'
import { useForm } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import logo from './assets/logo-diamond.svg'
import { colors } from '../src/assets/data/colors'
import Swal from 'sweetalert2'

export const Designer = () => {
    //form
    const [validate, setValidate] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        const date = new Date();
        html2canvas(document.getElementById('table'), { backgroundColor: null, scrollY: - window.scrollY }).then(canvas => {
            canvas.toBlob((blob) => {

                let formData = new FormData();
                for (const key in data) {
                    formData.append(key, data[key]);
                }
                const nombreDiseno = `lienzo-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getSeconds()}.png`;
                formData.append('diseno', blob, nombreDiseno);
                fetch('http://localhost/diamond-pixel-api/public/enviar-diseno', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => {
                        if (response.ok) {
                            Swal.fire({
                                title: '¡Éxito!',
                                text: 'Se ha registrado tu pedido.',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            });
                        }
                    })
                    .catch(err => console.log(err));
            });
        });
    }
    const handleReCaptchaChange = (value) => {
        console.log(value);
        setValidate(true);
    }
    const offCell = {
        on: false,
        color: '#ffffff'
    }
    const initialCells = Array.from({ length: 30 * 30 }, () => offCell);
    const [cells, setCells] = useState(initialCells);
    const [help, setHelp] = useState(false);
    const [colorActual, setColorActual] = useState('#ffffff');
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
        const date = new Date();
        html2canvas(document.getElementById('table'), { backgroundColor: null, scrollY: - window.scrollY }).then(canvas => {
            const link = document.createElement("a");
            document.body.appendChild(link);
            link.download = `lienzo-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getSeconds()}.png`;
            link.href = canvas.toDataURL("image/png");
            link.target = '_blank';
            link.click();
            document.body.removeChild(link);
        })
    }
    const closeHelp = () => {
        setHelp(true);
    }
    return (
        <>
            <NavbarPage inicio={false} />
            <div id="desinger" className="container-fluid bg-blue">
                <div className="row bg-blue justify-content-center">
                    <div className={help ? "col-11 helper d-none p-3" : "col-11 helper p-3"}>
                        <button className="btn" onClick={closeHelp}> <FontAwesomeIcon icon={faTimes} /> </button>
                        <p>
                            Esta página actualmente solo es soportada desde computadora, aun no hay
                            soporte para dispositivos moviles.
                            <br />
                            <strong>Instrucciones de uso:</strong>
                        </p>
                        <ul>
                            <li>Seleccionar un color de la lista de colores disponibles</li>
                            <li>Traza tu diseño perzonalizado, puedes utilizar todos los colores disponibles</li>
                            <li>Da click al botón de descargar para guardar una copia de tu diseño</li>
                            <li>Rellena el formulario con los datos del envío</li>
                        </ul>
                    </div>
                    <div className="col-12 pl-1 pl-md-5">
                        <label className="eslogan2">1. Crea tu diseño</label>
                    </div>
                    <div className="col-11">
                        <div className="row justify-content-center align-content-center">
                            <div className="col-12 col-md-8">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-11 mb-2">
                                        <h3 className="font-white">Color actual:</h3>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="current-color" style={{ background: colorActual }}></div>
                                            </div>
                                            <div className="col-6">
                                                <button type="button" onClick={saveCanvas} className="btn btn-enviar mb-3 float-right">Descargar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="table" className="grid">
                                    {
                                        cells.map((cell, index) =>
                                            <div
                                                style={{ background: cell.on ? cell.color : '#ffffff' }}
                                                onClick={updateCell(index)} key={index}
                                                onMouseDown={updateCell(index)}
                                                onMouseOver={updateCell(index)}
                                                onContextMenu={(e) => e.preventDefault()}
                                                className="cell">
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-3 text-center">
                                <div className="row h-100 justify-content-center align-content-center">
                                    <div className="col-12 mb-3">
                                        <label className="font-white">Herramientas</label>
                                        <div className="herramientas m-auto">
                                            <div className="row h-100 justify-content-center align-content-center">
                                                <div className="col-12 mb-3 mt-2">
                                                    <span className="text-bold"><FontAwesomeIcon className="mr-2" icon={faPen} /> Click Izq</span>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <span className="text-bold"><FontAwesomeIcon className="mr-2" icon={faEraser} /> Click Der</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="font-white">Colores disponibles</label>
                                        <div className="grid-colores m-auto">
                                            {
                                                colors.map((value, key) =>
                                                    <div className="cell-color"
                                                        key={key}
                                                        style={{ background: value, outline: '1px solid ' + value }}
                                                        onClick={() => onChangeColor(value)}>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pl-1 pl-md-5 mb-2 mt-2">
                        <div className="row pl-1">
                            <div className="col-12">
                                <label className="eslogan2 text-center text-md-left">2. Envíanos tu diseño</label>
                            </div>
                            <div className="col-12 col-md-6 form-contacto mb-3 bg-white">
                                <div className="col-12">
                                    <div className="col-12 mt-3 text-center">
                                        <h4>Datos del envío</h4>
                                    </div>
                                    <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-1 p-0 decoration-form"></div>
                                            <div className="col-11 p-0">
                                                <div className="form-group">
                                                    <input name="nombre" ref={register({ required: true })} type="text" className="form-control" placeholder="Nombre completo" />
                                                    {errors.nombre && <small style={{ color: 'red' }} className="form-text">Este campo es requerido</small>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1 p-0 decoration-form"></div>
                                            <div className="col-11 p-0">
                                                <div className="form-group">
                                                    <input name="correo" ref={register({ required: true })} type="text" className="form-control" placeholder="Correo electrónico" />
                                                    {errors.correo && <small style={{ color: 'red' }} className="form-text">Este campo es requerido</small>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1 p-0 decoration-form"></div>
                                            <div className="col-11 p-0">
                                                <div className="form-group">
                                                    <input name="direccion" ref={register({ required: true })} type="text" className="form-control" placeholder="Dirección" />
                                                    {errors.direccion && <small style={{ color: 'red' }} className="form-text">Este campo es requerido</small>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1 p-0 decoration-form"></div>
                                            <div className="col-11 p-0">
                                                <div className="form-group">
                                                    <input name="telefono" ref={register({ required: true })} type="text" className="form-control" placeholder="Teléfono" />
                                                    {errors.telefono && <small style={{ color: 'red' }} className="form-text">Este campo es requerido</small>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <ReCAPTCHA
                                                className="re-captcha"
                                                sitekey="6LeLix8aAAAAABpXe62vHITV7IEveN2tlcKjkl9f"
                                                onChange={handleReCaptchaChange}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button disabled={!validate} type="submit" className="btn btn-enviar mb-3">Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="helper p-3">
                                    <h4>Puntos a considerar:</h4>
                                    <ul>
                                        <li>Los datos que se escriban deben de ser completamente reales.</li>
                                        <li>Es necesario completar el capcha para poder dar click en el botón de enviar.</li>
                                        <li>
                                            Una vez la información es enviada nuestro equipo de trabajo se pondrá
                                            en contacto contigo para proseguir con la entrega y cotización.
                                        </li>
                                    </ul>
                                    <div className="text-right">
                                        <p className="d-inline mr-3">Atentamente:</p>
                                        <img className="img-fluid" width={"70px"} src={logo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
