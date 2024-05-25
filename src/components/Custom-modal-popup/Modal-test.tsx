import { useState } from "react"
import Modal from "./Modal"
import "./Modal.css"

export default function ModalTest() {
    const [showmodalPopup, setShowModalPopup] = useState(false)

    function handleToggleModalPopup() {
        setShowModalPopup(!showmodalPopup) 
    }


    function onClose() {
        setShowModalPopup(false)
    }
    return (
        <>
            <div>
                <button onClick={handleToggleModalPopup}>open modal popup</button>
                {
                    showmodalPopup && <Modal onClose={onClose} body={<div>customized body</div>} />
                }
            </div>
        </>
    )
}