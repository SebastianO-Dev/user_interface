import React, { useState } from 'react';
import '../Css/UI.css'
import { Modal_Profile } from '../Modal/Modal_Profile';
import { Modal_Publicar } from '../Modal/Modal_Publicar';

export const User_Interface = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

  return (
    <>
        <div className='header'>
            <h1 className='h1-ui'>Interface de Usuario</h1>
                <div className='buttons'>
                    <input type="text" className='inp-ui'/>
                    <button className='btn-uih' onClick={() => setShow(true)}>Perfil</button>
                    <button className='btn-uih' onClick={() => setShow2(true)}>Publicar</button>
                    <button className='btn-uih'>Contactar</button>
                    <button className='btn-uih'>Cerrar sesion</button>
                </div>
        </div>
        <hr />
        <div className='main'>
            <div className='container-1'>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
            </div>
            <div className='container-1'>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
            </div>
            <div className='container-1'>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
            </div>
            <div className='container-1'>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
            </div>
            <div className='container-1'>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <hr className='subject'/>
                    </div>
                    <div className='information'>
                        <p>Juan Alberto Quiroga</p> 
                        <p>37 años</p>
                        <p>3239693553</p>
                        <p>Metalisteria</p>
                        <button className='btn-profile' onClick={() => setShow(true)}>Perfil</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className='footer'>
            <div className='footer-h2'>
                <h2>Helper <span>People</span></h2>
            </div>
            <hr  className='footer-hr'/>
            <div className='footer-inf'>
                <p>Informatión</p>
                <div className='footer-contact'>
                    <a href="#">Github</a>
                    <hr className='contact-hr'/>
                    <a href="#">Facebook</a>
                    <hr className='contact-hr'/>
                    <a href="#">Whatsapp</a>
                    <hr className='contact-hr'/>
                    <a href="#">Soporte</a>
                </div>
            </div>
            <hr  className='footer-hr'/>
            <div className='devs'>
                <h3>Developers</h3>
                <h4>Sebastian Ospina</h4>
                <h4>Juan David Uribe</h4>
                <h4>Mayra Alejandra Gil</h4>
                <h4>Angie Estefania Mejia</h4>
                <h4>Luis David Rios</h4>
                <h4>Cristian Camilo Lotero</h4>
            </div>
        </div>
        <Modal_Profile isOpen={show} onClose={() => setShow(false)} />
        <Modal_Publicar isOpen={show2} onClose={() => setShow2(false)} />
    </>
  )
}
