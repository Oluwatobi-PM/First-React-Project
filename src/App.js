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

function App () {
    return (
        <div className="container">
            <h1>My App</h1>
        </div>
    )
}
export default App