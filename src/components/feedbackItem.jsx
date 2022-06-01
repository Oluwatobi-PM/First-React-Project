import {useState} from 'react'
import{FaTimes} from 'react-icons/fa'
import { PropTypes } from 'react'


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

    return (
            <Card >
                <div className="num-display">{item.rating}</div>
                <div className="text-display">{item.text}</div>
            </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem