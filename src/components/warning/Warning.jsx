import React, { useState } from 'react'
import './Warning.css'

const Warning = ({ text }) => {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <div className="warning-notice">
            <div className="logo">
                <img src="/images/precaucion.png" alt="logo" />
            </div>
            <div className="text">{text}</div>
            <button
                className="close-btn"
                onClick={() => setVisible(false)}
                aria-label="Cerrar aviso"
            >
                ×
            </button>
        </div>
    );
}

export default Warning