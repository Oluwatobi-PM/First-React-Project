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


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import AboutIconlink from './components/AboutIconLink'

function App () {
    return (
        <FeedbackProvider> 
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                    <Route exact path ='/' element = {
                        <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />  
                        <AboutIconlink/>
                        </>
                    }>
                    </Route>
                
                    <Route exact path='/about' element={
                        <>  
                            <AboutPage />
                        </>}/>
                    </Routes> 
                </div>      
            </Router>   
        </FeedbackProvider>         
    )
}

export default App