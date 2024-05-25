
interface ModalProps {
    id?: string;
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    onClose: () => void;
}


const Modal: React.FC<ModalProps> = ({id, header, body, footer, onClose}) => {
    return (
       <>
            <div id={id || 'modal'} className="modal">
                <div className="moda-content">
                    <div className="header">
                        <span onClick={onClose} className="close-modal-icon">X</span>
                        <h2>{header ? header : 'Header'}</h2>
                    </div>
                    <div className="body">
                    <h2>{body ? body : <div><p>This Is a Content Body</p></div>}</h2>
                    </div>
                    <div className="footer"> 
                    <h2>{footer ? footer : <h2>Footer</h2>}</h2>
                    </div>
                </div>
            </div>
       </> 
    )
}

export default Modal