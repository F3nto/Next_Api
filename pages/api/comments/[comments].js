import {comments} from '../../../data/comments'

const handler = (req, res) => {

    const {commentId} = req.query

    console.log(req.query)

    const comment = comments.find(comment => comment.text === parseInt(commentId))

    res.status(201).json(comment)

}
export default handler



