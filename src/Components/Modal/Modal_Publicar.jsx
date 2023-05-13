import React from 'react'
import '../Css/Modal_Pub.css'

export const Modal_Publicar = ({ isOpen, onClose }) => {
  return (
        <div className='modal-container' style={{ display: isOpen ? 'grid' : 'none' }}>
            <div className='modal-body'>
                <button className='modal-close' onClick={onClose}>X</button>
                <div className='modal-add'>
                    <a href="#" className='add_pub'>+</a>
                    
                </div>
            </div>
        </div>
  )
}
