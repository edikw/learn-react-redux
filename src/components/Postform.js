import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style/postForm.css';
import { createPost } from '../actions/postActions';


class addpost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            image: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e){
        e.preventDefault();
        const dataPost = {
            image: this.state.image,
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(dataPost);
        
    }
    render(){
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="title">
                        <label>Url Image:</label><br/>
                        <input type="text" name="image" placeholder="Url Image" value={this.state.image} onChange={this.onChange}/><br/>
                    </div>
                    <div className="title">
                        <label>Title:</label><br/>
                        <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.onChange}/><br/>
                    </div>
                    <div className="body">
                        <label>Body:</label><br/>
                        <textarea name="body" type="text" placeholder="Body" value={this.state.body} onChange={this.onChange}></textarea><br/>
                    </div>

                    <button type="submit">Submit</button>
                </form>   
            </div>
        )
    }
}
addpost.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost })(addpost);

