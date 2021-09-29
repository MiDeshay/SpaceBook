import React from 'react';


class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateBody = this.updateBody.bind(this)
    }

    updateBody(e){
        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.action(this.state)
    }

    render(){
        const { formType} = this.props
        
        return(
            <div>
                <h1>{formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="What's on your mind?" value={this.state.body} onChange={this.updateBody}/>
                <button>Submit</button>
            </form>
            </div>
            
        )
    }
}

export default PostForm