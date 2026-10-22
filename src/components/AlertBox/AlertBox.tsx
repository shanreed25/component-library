import type { AlertBoxProps } from "../../types/index"

export function AlertBox({type, message, onClose, children}: AlertBoxProps){
    return (
        <div className={`alert alert-${type}`}>
        <div className="alert-header">
            <p className="alert-message">{message}</p>

            {/* conditional rendering: this check keeps the button
            out of the page entirely when onClose is not passed
            if onClose is passed,  show the button
            if onClose is not passed, show nothing
         */}
            {onClose && <button className="close-x" onClick={onClose}>X</button>}
            {/* onClose takes no arguments (() => void) so it can be given 
            to onClick for React to run it when the button is clicked */}
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