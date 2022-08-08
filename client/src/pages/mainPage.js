import React from "react";
import ProductCard from "../components/ProductCard";
import { Grid } from "@mui/material";
import MainTitle from '../components/MainTitle';
import 'aos/dist/aos.css';

class mainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    fetch('http://localhost:4000/api/products')
    .then(res => res.json())
    .then(res => this.setState({data:res}))
  }

  render() {
    return (
      <div>
        <MainTitle/>
        <Grid container spacing={4}>
          {this.state.data.map((items) => {
            return (
              <Grid item md={3}>
                <ProductCard
                  img={items.img}
                  name={items.name}
                  price={items.price}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default mainPage;
