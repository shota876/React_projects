export default function Modal({id, header, body, footer}){
    return (
       <>
            <div id={id || 'modal'} className="modal">
                <div className="moda-content">
                    <div className="header">
                        <span className="close-modal-icon">&items;</span>
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