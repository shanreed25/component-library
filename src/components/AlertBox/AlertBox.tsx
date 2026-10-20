import type { AlertBoxProps } from "../../types/index"

export function AlertBox({type, message, onClose, children}: AlertBoxProps){
    return (
        <div className={`alert alert-${type}`}>
        <div className="alert-header">
            <p>{message}</p>
            <button>X</button>
        </div>
        {/* conditional rendering: this check keeps the div 
            out of the page entirely when there's nothing to put in it
            if there are children, wrap them in a div and show it
            if there are no childern, show nothing
         */}
        {children && <div className="alert-body">{children}</div>}
        </div>
    )
}