// function App () {
//     const title = 'Blog Post'
//     const body = 'This is my blog post'
//     const comments = [
//         {id: 1, text: 'Comment One'},
//         {id: 2, text: 'Comment Two'},
//         {id: 3, text: 'Comment Three'},
//     ]

//     const loading = false
//     const showComments = true

//     if(loading) return <h1>Loading...</h1>

//     const commentBlock = 
//     <div className="comments">
//         <h3> Comments ({comments.length})</h3>
//         <ul>
//         {comments.map((comments, index) => (
//             <li key={index}>{comments.text}</li>
//         ) )}
//         </ul>
//     </div>

//     return (
//     <div className="container">
//         <h1>{title}</h1>
//         <p>{body}</p>
//         {showComments && commentBlock}
        
//     </div>
//     )
// }

import {v4 as uuidv4} from 'uuid'

import FeedbackData from './data/FeedbackData'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'

function App () {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item) => item.id !== id))
    }}

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback}
                handleDelete = {deleteFeedback}/>
            </div>
        </>
    )
}

export default App