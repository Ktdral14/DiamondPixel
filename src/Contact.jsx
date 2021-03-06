import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

export const Contact = () => {
    const [validate, setValidate] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('nombre', data.nombre);
        formData.append('correo', data.correo);
        formData.append('mensaje', data.mensaje);
        fetch('http://diamondpixel.tecdevsmx.com/api/contacto', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        title: '¡Éxito!',
                        text: 'Se ha enviado tu mensaje.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    document.getElementById("contactForm").reset();
                }
            })
            .catch(err => console.log(err));
    }
    const handleReCaptchaChange = (value) => {
        console.log(value);
        setValidate(true);
    }
    return (
        <div className="col-12">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="row pl-4">
                        <div className="col-12">
                            <h3>Envíanos un comentario</h3>
                        </div>
                        <div className="col-12">
                            <h6>Si quieres saber acerca de alguno de nuestros productos
                                o tienes algún comentario háznoslo saber.</h6>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row align-items-center">
                                <div className="col-1 p-0 ml-3 decoration-info"></div>
                                <div className="col-8 col-md-11 p-0 pl-2">
                                    <h6><strong>Ubicación:</strong> Colonia Obrera 2 Andador Mante #5 C.P 89885</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row align-items-center">
                                <div className="col-1 p-0 ml-3 decoration-info"></div>
                                <div className="col-8 col-md-11 p-0 pl-2">
                                    <h6><strong>Correo electrónico:</strong> diamondpixelmante@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row align-items-center">
                                <div className="col-1 p-0 ml-3 decoration-info"></div>
                                <div className="col-8 col-md-11 p-0 pl-2">
                                    <h6><strong>Teléfono:</strong> 831-158-2129</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 form-contacto mt-3 mt-md-0 m-md-0">
                    <form id="contactForm" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
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
                                    <input name="correo" ref={register({ required: true })} type="text" className="form-control" placeholder="Correo" />
                                    {errors.correo && <small style={{ color: 'red' }} className="form-text">Este campo es requerido</small>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 p-0 decoration-form"></div>
                            <div className="col-11 p-0">
                                <div className="form-group">
                                    <textarea name="mensaje" ref={register({ required: true })} className="form-control" placeholder="Mensaje..." />
                                    {errors.mensaje && <small style={{ color: 'red' }} className="form-text">Este campo es requerido</small>}
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
            <div className="decoracion d-none d-md-block"></div>
        </div>
    )
}
