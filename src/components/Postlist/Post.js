import React from 'react'


const Post=(props)=> {
  const {title,description,created_at}=props.data;
 return  <div className="card mb-4">
    <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
      <a href="#" className="btn btn-primary">Read More &rarr;</a>
    </div>
    <div className="card-footer text-muted">
      Posted on {created_at} by
      <a href="#">Start Bootstrap</a>
    </div>
  </div>
}

export default Post
