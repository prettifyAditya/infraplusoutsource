export default function ButtonMain({ desc = "Enquire now", className= "" }) {
    return(
        <button className={`btn-btn ${className}`}>
            <span type="button">
            {desc}
            </span>
        </button>
    )
}