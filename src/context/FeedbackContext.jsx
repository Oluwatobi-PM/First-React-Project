import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    // Feedback Initializer
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'This item is from context',
        rating: 10
    }, {
        id: 2,
        text: 'This is second item from context',
        rating: 6
    }])

    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item) => item.id !== id))
    }}

    const [feedbackEdit, setFeedbackEdit] = useState ({
        item: {},
        edit: false
    })


    // Update feedback item
    const updateFeedbackItem = (id, updItem) => {
       setFeedback(
           feedback.map((item) => (item.id === id ? { ...item, ...updItem}: item))
        )
       setFeedbackEdit({
        item: {},
        edit:true
    })
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }


    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback, 
        deleteFeedback, 
        addFeedback, 
        updateFeedbackItem,
        editFeedback,
        feedbackEdit}}>
        {children}

    </FeedbackContext.Provider>
}

export default FeedbackContext