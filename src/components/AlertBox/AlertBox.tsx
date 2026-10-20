import type { AlertBoxProps } from "../../types/index"

export function AlertBox({type, message, onClose, children}: AlertBoxProps){
    return (
        <>
        <div className={`alert alert-${type}`}>
            <p>{message}</p>
            <button>X</button>
        </div>
        {children && <div className="alert-body">{children}</div>}
        </>
    )
}