import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import PropTypes from 'prop-types';
// import { deleteData } from '../actions/postActions';

import '../style/post.css';


class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render(){
        const dataItems = this.props.posts.map(get => (
            <div className="column" key={get.id}>
                <div className="post-module">
                <div className="thumbnail">
                    <div className="date">
                    <div className="day">{get.id}</div>
                    <div className="month">Mar</div>
                    </div><img src={get.url} alt=""/>
                </div>
                <div className="post-content">
                    <div className="category">Photos</div>
                    <h1 className="title">{get.title}</h1>
                    <h2 className="sub_title">{get.body}</h2>
                    <p className="description">{get.title}</p>
                </div>
                </div>
            </div>
        ))
    return (
        <div className="container">
            <div>
                <h5>Result:</h5><br/>
                <hr/>
                {dataItems}   
            </div>
        </div>
    )
}
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
    // deleteData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost:state.posts.item,
    // deleteData: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

