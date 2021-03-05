import { useState } from 'react'

import Dialog from './Dialog'
import Overlay from './Overlay'

const Todo = (props) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    function deleteHandler() {
        setIsModalOpen(true)
    }

    function closeDialogHandler() {
        setIsModalOpen(false)
    }

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { isModalOpen ? <Dialog closeDialog={closeDialogHandler} /> : null } {/* one way of conditional rendering */}
            { isModalOpen && <Overlay closeDialog={closeDialogHandler} /> } {/* other way of conditional rendering */}
        </div>
    );
}
 
export default Todo;