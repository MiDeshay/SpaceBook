import React from "react"


class Reply extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {reply} = this.props

        const userPic = reply.avatarUrl ? (reply.avatarUrl) : ("#")

        return (<div>
                     <div>
                        <div className="reply-content">
                            <img src={`${userPic}`} className="reply-picture"></img>
                            <div className="comment-text">{reply.body}</div>
                        </div>
                    </div>
             </div>)
    }

}

export default Reply