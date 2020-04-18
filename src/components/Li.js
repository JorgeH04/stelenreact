import React, { Component } from 'react'
//import axios from 'axios'
//import {getPosts} from './service'



export default class List extends Component{

   state = {
    posts: []
   }
      


   
  

  componentDidMount = () =>{
    this.fetchPosts();

  }

   fetchPosts = () =>{
    fetch('/api/post')
    //fetch('https://apidbmongo.herokuapp.com')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({posts: data});
        //console.log(this.state.posts)   https://apidbmongo.herokuapp.com/
      });

      
  }




  render() {
    return (
        <div >
            <div className="col-md-6 offset-md-3">
               <div className="card card-body">
                 <h4>Create a Note</h4>
                   <form onSubmit={this.addPost}>
                
                {/* Name */}
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        
                        name="title"
                        onChange={this.handleChange} 
                        value={this.state.title}
                        required />
                </div>
                {/* surname */}
                <div className="form-group">
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        name="description"
                        onChange={this.handleChange} 
                        value={this.state.description}
                        required />
                </div>

                
              
                <button className="btn btn-primary">
                    Save <i className="material-icons">
                        assignment
                         </i>
                </button>
            </form>
        </div>
      </div>

      {
  this.state.posts.map(post => (
    <article className="product" key={post._id}>
    <div className="img-container">
      <img src={post.image} alt={post.title || "default title"} />
    
    </div>
    <div className="product-footer">
      <p className="product-title">{post.title || "default title"}</p>
      <p className="product-price">${post.price || 0}</p>
    </div>
  </article>
  ))
}
        </div>





    )
}
}


React.useEffect(() => {
  setLoading(true);
  fetch(`/api/post`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setPosts(res.data.posts);
    setLoading(false);  
  });
  return () => {};
}, []);


const loadingPokemon = async data => {
  let postdata = await Promise.all(
      data.map(async post => {
      let dataRecord = await getOne(pokemon.url);
      return dataRecord;
  })
);
setPosts(postdata);
};









import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import List from "./components/List";



function App() {
  return (
  <Router>

  <Nav />
  <Route path="/list" component={List} exact />
  

  </Router>
  );
}

export default App;





