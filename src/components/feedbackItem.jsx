import{FaTimes} from 'react-icons/fa'
import  PropTypes  from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

// function FeedbackItem() {
//   const [rating, setRating] = useState(7)  
//   const [text, setText] = useState("This is an example of a feedback item")  

//   const handleClick = () => {
//       setRating((prev) => {
//           console.log(prev)
//           return prev + 1
//       })
//   }
//   return (
//     <div className="card">
//         <div className="num-display">{rating}</div>
//         <div className="text-display">{text}</div>
//         <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }


import Card from './shared/card'
function FeedbackItem({item}) {
    const {deleteFeedback} = useContext(FeedbackContext)


    return (
            <Card >
                <div className="num-display">{item.rating}</div>
                <button onClick= {() => deleteFeedback(item.id)} className='close'>
                    <FaTimes color='purple' />
                </button>
                <div className="text-display">{item.text}</div>
            </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem