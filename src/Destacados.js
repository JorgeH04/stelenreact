import React, { Component } from 'react'
//import axios from 'axios'

export default class Update extends Component {
    constructor() {
    super();
    this.state = {
          name: '',
          title: '',
          image: '',
          description: '',
          price: '',
          amount: '',
          posts: []
        
       
      };
      this.handleChange = this.handleChange.bind(this);
      this.addPost = this.addPost.bind(this);

    }

   addPost(e){
       fetch('https://stelenapp.herokuapp.com/adddos',{
         method: 'POST',
         body: JSON.stringify(this.state),
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
       })
       .then(res => res.json(res))
       .then(data => {
           console.log(data)
           this.setState({name: '', title: '', image: '', description: '', price: '', amount: ''});
           this.fetchPosts();

       })
       .catch(err => console.error(err));
       console.log(this.state);
       e.preventDefault();
      
   }

   componentDidMount() {
    this.fetchPosts();

  }

   fetchPosts() {
    fetch('https://stelenapp.herokuapp.com')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({posts: data});
        //console.log(this.state.posts)
      });

      
  }

  deletePost(_id){ 
        fetch(`https://stelenapp.herokuapp.com/delete/${_id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.fetchPosts();
          });
      
    }



   handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

    render() {
        return (
            <div >
                <div className="col-md-6 offset-md-3">
                   <div className="card card-body">
                     <h4>Actualizar sus productos</h4>
                       <form onSubmit={this.addPost}>
                    
                    {/* Name */}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            
                            name="name"
                            onChange={this.handleChange} 
                            value={this.state.name}
                            required />
                    </div>
                    {/* title */}
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

                     {/* Image */}
                     <div className="form-group">
                         <input
                            type="text"
                            className="form-control"
                            placeholder="Image"
                            name="image"
                            onChange={this.handleChange} 
                            value={this.state.image}
                            required />
                    </div>

                      {/* description */}
                    <div className="form-group">
                         <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            onChange={this.handleChange} 
                            value={this.state.description}
                            required />
                    </div>

                    {/* price */}
                  <div className="form-group">
                         <input
                            type="text"
                            className="form-control"
                            placeholder="Price"
                            name="price"
                            onChange={this.handleChange} 
                            value={this.state.price}
                            required />
                    </div>

                        {/* amount */}
                  <div className="form-group">
                         <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            name="amount"
                            onChange={this.handleChange} 
                            value={this.state.amount}
                            required />
                    </div>


                    
                  
                    <button className="btn btn-primary">
                        Guardar <i className="material-icons">
                            producto
                             </i>
                    </button>
                </form>
            </div>
          </div>




        <section className="section">
      <h2 className="section-title"></h2>
      <div className="products-center">
          {
         this.state.posts.map(post => (
  <article className="product" key={post._id}>
  <div className="img-container">
    <img src={post.image} alt={post.title || "default title"} />
   
  
  </div>
  <div className="product-footer">
    <p className="product-title">{post.name || "default title"}</p>
    <p className="product-title">{post.title || "default title"}</p>
    <p className="product-price">${post.price || 0}</p>
    <button onClick={() => this.deletePost(post._id)} className="btn light-blue darken-4">
                              <i className="btn btn-danger">delete</i> 
                            </button>
                            <button onClick={() => this.editPost(post._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                              <i className="btn btn-danger">edit</i>
                            </button>
  </div>
  
</article>))

 
}
</div>
 </section>


         
            </div>





        )
    }
}