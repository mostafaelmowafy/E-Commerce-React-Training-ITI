import { Component } from "react";
import ProductApi from "../api/product";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Gallery extends Component{
    state ={
        AllProduct: new ProductApi().getAllProducts(this.props.match.params.categorie),
        
    }
    render (){
        return (
            <>
                <h1 class='text-center my-5'>{this.props.match.params.categorie}</h1>
                <hr />
                <section id="gallery" class='d-flex flex-wrap justify-content-center' >
                    {
                        this.state.AllProduct.map((e,i)=>{
                            return(
                                <div class='m-3 'key={e.id} >
                                    <img src={e.image} alt="T-Shirt"/>
                                    <p>
                                        <br /><b>Product Name: </b>{e.name} <br/>
                                        <b>Price: </b>{e.price}
                                        <br/>
                                        <Link to={`/Product/${i}`} class='btn btn-success mt-3 w-100'>More Info</Link>
                                    </p>
                                </div>
                            )
                        })
                    }
                </section>
            </>
        ) 
    }
    
};
export default Gallery;