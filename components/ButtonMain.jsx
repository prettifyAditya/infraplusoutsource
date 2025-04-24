export default function ButtonMain({ desc = "Enquire now", className= "", onClick }) {
    return(
        <button type="button" className={`btn-btn ${className}`} onClick={onClick}>
            <span type="button">
            {desc}
            </span>
        </button>
    )
}