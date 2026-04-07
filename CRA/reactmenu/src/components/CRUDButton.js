import './styles/button.css'

export default function CRUDButton({text, onClick, selected}){
    return(
        <button onClick={onClick} className={selected ? 'selected' : ''}>{text}</button>
    )
}