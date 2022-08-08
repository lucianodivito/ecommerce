import React, { Component } from "react";
import CartProducts from "../components/CartProducts";
import CartTitle from "../components/CartTitle";
import Container from "@mui/material/Container";
import NoProductsCart from "../components/NoProductsCart";
import { Button } from "@mui/material";

const productsStyle = {
  padding: "10px",
  background: "#151C27",
  margin: "10px",
  color: "#fff",
  fontFamily: "monospace",
  fontSize: "15px",
};

const productsOnCart = JSON.parse(localStorage.getItem("cart"));

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: productsOnCart
    };
  }

  render() {
    return (
      <div>
        <Container>
          {!productsOnCart ? (
            <NoProductsCart />
          ) : (
            <div>
              <CartTitle />
              {this.state.data.map((items) => {
                return (
                  <Container style={productsStyle}>
                    <CartProducts name={items.name} price={items.price} img={items.img}/>
                  </Container>
                );
              })}
              <Button color='error' style={{
                margin: '0 auto',
                display: 'flex'
              }} onClick={() => {
                localStorage.clear();
                document.location.reload(true);
              }}>Remove all</Button>;
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default Cart;
