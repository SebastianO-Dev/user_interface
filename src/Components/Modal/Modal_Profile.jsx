import React from 'react'
import '../Css/Modal.css'

export const Modal_Profile  = ({ isOpen, onClose }) => {
  return (
    <div className='modal-container' style={{ display: isOpen ? 'grid' : 'none' }}>
        <div className='modal-body'>
            <button className='modal-close' onClick={onClose}>X</button>
            <div className='profile'>
                <h2>Profile</h2>
            </div>
        </div>
    </div>
  )
}

