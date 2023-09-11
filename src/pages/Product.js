import React from "react";
import '../bootstrap/bootstrap.min.css';
import { Component } from "react";
import CartApi from "../api/cart";
import ProductApi from "../api/product";


class Product extends Component{
  state={
    product:new ProductApi().getProduct(this.props.match.params.id),
  }
  AddCard =()=>{
    const state = new CartApi().addToCart(this.state.product)
    if(state){
      alert("It has been added successfully")
    }else{
      this.props.history.push('/login')
      alert("Please log in first")
    }
  }
  render(){
    return(
      <>
        <div class="card mb-3 mt-5" >
          <div class="row g-0">
            <div class="col-8">
              <div class="card-body">
                <h2 class="card-title">{this.state.product.name}</h2>
                <p class="card-text">{this.state.product.discreption}</p>
                <hr />
                <p class="card-text"><b class="text-body-secondary">{this.state.product.price}$</b></p>
                <hr />
                <div class="d-flex my-4 justify-content-around">
                  <div class="col-1 d-flex flex-column align-items-center text-center">                          
                    <div> 
                      <img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-cod._CB638858551_.png" style={{height:"35px",width:"35px"}} alt="Cash on <br> Delivery"/> 
                    </div> 
                    <div> 
                      <span> Cash on <br/> Delivery </span> 
                    </div>
                  </div>                           
                  <div class="col-1 d-flex flex-column align-items-center text-center">                       
                    <div> 
                      <img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-returns._CB403797073_.png" style={{height:"35px",width:"35px"}} alt="15 days Returnable"/> 
                    </div> 
                    <div> 
                      <span> 15 days <br/> Returnable</span> 
                    </div> 
                  </div>                           
                  <div class="col-1 d-flex flex-column align-items-center text-center"> 
                    <div> 
                      <img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB590597072_.png" style={{height:"35px",width:"35px"}} alt="Free <br> Delivery" /> 
                    </div> 
                    <div> 
                      <span> Free <br/> Delivery </span> 
                    </div>
                  </div>                           
                  <div class="col-1 d-flex flex-column align-items-center text-center"> 
                    <div> 
                      <img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB403797073_.png" style={{height:"35px",width:"35px"}} alt="Delivered <br> by Amazon" /> 
                    </div> 
                    <div> 
                      <span> Delivered <br/> by Amazon </span> 
                    </div> 
                  </div> 
                </div>
                <hr />
                <button class="btn btn-primary" onClick={this.AddCard}>Add To Cart</button>
              </div>
            </div>
            <div class="col-4" id="indGallary">
              <img src={this.state.product.img} alt="T-Shirt" class="img-fluid rounded-start cover float-end" style={{ height:"40vw", objectFit:"contain flot" }}/>
            </div>
          </div>
        </div>
        <section style={{color: "#000"}}>
          <div class="container py-5">
            <div class="row d-flex justify-content-center">
              <div class="col-md-10 col-xl-8 text-center">
                <h3 class="fw-bold mb-4">Review</h3>
                <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                quisquam eum porro a pariatur veniam.
                </p>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="card">
                  <div class="card-body py-4 mt-2">
                    <div class="d-flex justify-content-center mb-4">
                      <img alt="" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" class="rounded-circle shadow-1-strong" width="100" height="100" />
                    </div>
                    <h5 class="font-weight-bold">Teresa May</h5>
                    <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                    <ul class="list-unstyled d-flex justify-content-center">
                      <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                      </li>
                      <li>
                        <i class="fas fa-star-half-alt fa-sm text-info"></i>
                      </li>
                    </ul>
                    <p class="mb-2">
                    <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                    ad velit ab hic tenetur.
                    </p>
                  </div>
                </div>
              </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <div class="card">
                    <div class="card-body py-4 mt-2">
                      <div class="d-flex justify-content-center mb-4">
                        <img alt="" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp" class="rounded-circle shadow-1-strong" width="100" height="100" />
                      </div>
                      <h5 class="font-weight-bold">Maggie McLoan</h5>
                      <h6 class="font-weight-bold my-3">Photographer at Studio LA</h6>
                      <ul class="list-unstyled d-flex justify-content-center">
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                      </ul>
                      <p class="mb-2">
                        <i class="fas fa-quote-left pe-2"></i>Autem, totam debitis suscipit saepe
                        sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis
                        labore laboriosam.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-0">
                  <div class="card">
                    <div class="card-body py-4 mt-2">
                      <div class="d-flex justify-content-center mb-4">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"class="rounded-circle shadow-1-strong" width="100" height="100" alt="" />
                      </div>
                      <h5 class="font-weight-bold">Alexa Horwitz</h5>
                      <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
                      <ul class="list-unstyled d-flex justify-content-center">
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                        <li>
                          <i class="fas fa-star fa-sm text-info"></i>
                        </li>
                        <li>
                          <i class="far fa-star fa-sm text-info"></i>
                        </li>
                      </ul>
                      <p class="mb-2">
                          <i class="fas fa-quote-left pe-2"></i>Cras sit amet nibh libero, in gravida
                          nulla metus scelerisque ante sollicitudin commodo cras purus odio,
                          vestibulum in tempus viverra turpis.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
      </>

    )
  }
}

export default Product;
