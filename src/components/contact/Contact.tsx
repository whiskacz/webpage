import './contact.scss';
import { GoArrowRight } from "react-icons/go";

const Contact = () => {
  return (
    <div className='contactContainer'>
        <div className="textContainer">
            <span className='title'>Let's talk.</span>
            <div className='detailsContainer'>
                <span>Share your excitement.</span>
                <span>pawel@blasiak.info <GoArrowRight /></span>
            </div>
            
        </div>
    </div>
  )
}

export default Contact