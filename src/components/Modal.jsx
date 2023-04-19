import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export const Modal = (props ) => {
    const {isOpen,onConfirm,message} = props
    return (
        <ModalBackground isOpen={isOpen} onClick={onConfirm}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={onConfirm}>
                        X
                    </CloseButton>
                    <ModalMessage> {message ? message : "Confirm Box"} </ModalMessage>
            </ModalContainer>           
       </ModalBackground>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    message: PropTypes.string,
}

const ModalBackground = styled.div`
    position: absolute;
    display: flex;
    top:15%;
    left:35%;
    right:35%;
    display: ${(props) => props.isOpen ? "flex" : "none"};
    `

const ModalContainer = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    opacity: 1;
    z-index: 100;
    `

const CloseButton = styled.button`
    display: flex;
    justify-content: flex-end;
    background-color: white;
    border: none;
    `

const ModalMessage = styled.span`
    margin-left:20;
    margin-right:20;
    color: black;
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
    text-align: center;
    `
