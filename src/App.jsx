import { useState } from 'react'
import { Modal } from './components/Modal'
import './App.css'

export const App = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(!openModal)
  
  return (
    <div className="App">
      <div onClick={toggleModal}>
        Click here to open modal
      </div>
        <Modal isOpen={openModal} onConfirm={toggleModal}/>
    </div>
  )
}