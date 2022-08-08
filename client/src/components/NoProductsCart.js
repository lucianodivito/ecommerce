import React, { Component } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const noProductsStyle = {
    textAlign: "center",
    color: "#fff",
    fontFamily: "monospace",
    fontWeight: "200",
  };
  
  const align = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

export default class NoProductsCart extends Component {
  render() {
    return (
      <div>
        <Container style={align}>
          <RemoveShoppingCartIcon
            style={Object.assign({ fontSize: "80px" }, noProductsStyle)}
          />
          <h2 style={noProductsStyle}>You don't have products</h2>
          <Button variant="outlined" href="/">
            See our products
          </Button>
        </Container>
      </div>
    );
  }
}
