import displayPicture from '../../assets/images/displayPicture.jpg'
import './index.scss';

const DisplayPicture = () => {
    return (
        <div className="display-pic-container">
            <img src={displayPicture} alt="Failed to load the picture" className='dp-icon' />
        </div>
    )
}

export default DisplayPicture;