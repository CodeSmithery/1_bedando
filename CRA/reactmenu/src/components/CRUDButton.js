import './styles/button.css'

const CRUDButton = () => {
    return (
        <div className='ass'>
            <button className='create'>
                Létrehoz
            </button>
            <button className='read'>
                Olvas
            </button>
            <button className='update'>
                Frissít
            </button>
            <button className='delete'>
                Töröl
            </button>
        </div>
    );
}

export default CRUDButton;