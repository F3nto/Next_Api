import { useState } from "react"

const CommentPage = () => {

    const [comments, setComments] = useState([])

    const [inputComment, setInputComment] = useState('')

    const fetchComments = async() => {

        const response = await fetch(`/api/comments`)
        const data = await response.json()

        setComments(data)
    }

    const submitComment = async() => {

        const response = await fetch(`/api/comments`, {
            
            method : "POST",
            body : JSON.stringify({comments}),
            headers : {'Content-Type' : 'application/json'},

        })

        const data = await response.json()

        console.log('Api data....', data)
        
    }

    const deleteComment = async(commentId) => {

        const response = await fetch(`/api/comments/${commentId}`, {

        method : "DELETE",
        })

        const data = await response.json()

        console.log(data)

        fetchComments()

    }

return(

    <>

    <input type = 'text' 
    placeholder="Type Your Comment" 
    value={inputComment} 
    onChange = {txt => setInputComment(txt.target.value)}/>

    <button onClick={submitComment}>Submit Comment</button>
    
    <button onClick={fetchComments}>Loading comments.....</button>
    
    {
        comments.map(com => {

            return(

                <div key = {com.id}>

                    {com.id} {com.text}
                    

                    <button onClick={deleteComment(com.id)}>Delete</button>

                </div>



            )



        })



    }
    
    
    </>





)

}

export default CommentPage

