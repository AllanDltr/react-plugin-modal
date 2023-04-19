# HRNet - React Plugin Modal
OpenClassrooms : Convert a jQuery Library to React

# Plugin to add basic Modal for Openclassrooms HRNet Project

A small Modal React component for OpenClassrooms project 14. It's functionnality is to appear upon employee creation to notify the user.

## Features
- Display with useState
- Lock the webpage controls as long as the modal is shown

## Get started

### Download

[React Plugin Modal](https://www.npmjs.com/package/react-plugin-modal-afdltr)

### Requirements

- React 18.2.0 or newer

### Installation

- using npm
  `npm install react-plugin-modal-afdltr`

- using yarn
  `yarn add react-plugin-modal-afdltr`

### Usage

Import the plugin from node_modules in your React component.

The Modal requires 2 props to work: 
- `isOpen` (Boolean) => Variable to control the display of the Modal
- `onConfirm` (Function) => Action triggered when clicking on the X (Close) button

The Modal has 1 optionnal props: 
- `message` (String) => Personnalized message show inside on the Modal, with a default value in case nothing is set

_ModalBasic.js_

```javascript
import React, { useState } from "react";
import Modal from "react-plugin-modal-afdltr";

export const ModalBasic = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(!openModal)
  
  return (
    <div className="App">
      <div onClick={toggleModal}>
        Click here to open Modal
      </div>
        <Modal isOpen={openModal} onConfirm={toggleModal}/>
    </div>
  )
}
```

_ModalCustom.js_

```javascript
import React, { useState } from "react";
import Modal from "react-plugin-modal-afdltr";

export const ModalCustom = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(!openModal)
  
  return (
    <div className="App">
      <div onClick={toggleModal}>
        Click here to open modal
      </div>
        <Modal isOpen={openModal} message="Employee has been created" onConfirm={toggleModal}/>
    </div>
  )
}
```
