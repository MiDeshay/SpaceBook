import React from "react";
import Reply from "./reply";

class Comment extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.comment
        
    }

    componentDidMount(){
        
        const input = document.getElementById(`comment-edit-${this.props.comment.id}`);
        const dropDown = document.getElementById(`comment-dropdown-${this.props.comment.id}`)
        const modalHider = document.getElementById("modal-close")
        const comment =  document.getElementById(`comment-user-text-${this.props.comment.id}`)

        if(modalHider){

            document.addEventListener("click", (e) => {
                if(e.target === modalHider){
                    input.style.display = "none"
                    dropDown.style.display = "none"
                    modalHider.style.display = "none"
                    comment.style.display = "block"
                }
            })
        }
        const that = this;
        if(input){

            input.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                that.handleEdit()
            }
            });
        }
    }

    handleDelete(){
        this.props.deleteComment(this.props.comment.id)
        document.getElementById("modal-close").style.display = "none"
        document.getElementById(`comment-dropdown-${this.props.comment.id}`).style.display = "none"
    }

    handleEdit(){
        this.props.updateComment(this.state)
        const textEdit = document.getElementById(`comment-edit-${this.props.comment.id}`)
        textEdit.style.display = "none"

        document.getElementById(`comment-user-text-${this.props.comment.id}`).style.display="block"
    }

    handleInput(e){
        this.setState({body: e.currentTarget.value})
    }

    showTextInput(){
        const textEdit = document.getElementById(`comment-edit-${this.props.comment.id}`)
        textEdit.style.display= "block"
        textEdit.focus()
        document.getElementById(`comment-user-text-${this.props.comment.id}`).style.display="none"
        document.getElementById(`comment-dropdown-${this.props.comment.id}`).style.display = "none"
        

    }

    showCommentDropdown(){
        document.getElementById(`comment-dropdown-${this.props.comment.id}`).style.display= "flex"
        document.getElementById("modal-close").style.display = 'block'
    }


    render(){
        
        const comment = this.props.comment
        const post = this.props.post
        const commenter = post.commenters[comment.commenter_id]
        const userPic = commenter.avatarUrl ? (commenter.avatarUrl) : ("#")
        const commentDropdownButton = comment.commenter_id === this.props.currentUser.id ? (<button className="comment-dropdown-reveal" onClick={this.showCommentDropdown.bind(this)}></button>) : ""        
         
       
                
        return(
        <div>
            <div className="comment-content">
                

                <div className="comment-content">
                <img src={`${userPic}`} className="comment-picture"></img>
                    <div className="comment-user-text" id={`comment-user-text-${this.props.comment.id}`}>
                        <div className="comment-user-name"> {`${commenter.firstName} ${commenter.lastName}`}</div>
                        <div className="comment-text">{comment.body}</div>
                    </div>
                    <input type="text" className="comment-edit" id={`comment-edit-${this.props.comment.id}`}value={this.state.body} onChange={this.handleInput.bind(this)}/>
                </div>

                    {commentDropdownButton}
                    <div id="modal-close" ></div>
                    <div id={`comment-dropdown-${this.props.comment.id}`} className="comment-dropdown" >
                        <button className="comment-option" onClick={this.handleDelete.bind(this)}>Delete</button>
                        <button className="comment-option" onClick={this.showTextInput.bind(this)}>Edit</button>
                    </div>
                
            </div>
            
        
        </div>)
           
           
         
        
        
        
    }

}

export default Comment