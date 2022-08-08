import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Toaster, toast } from "react-hot-toast";
import "./css/ProductCard.css";

let storedProducts = [];

class ProductCard extends React.Component {
  render() {
    return (
      <Card
        sx={{ width: 270, maxWidth: 270, height: 400 }}
        style={{ background: "#151C27", margin: "auto 0" }}
        className="card"
      >
        <CardActionArea href={this.props.img} target="_blank">
          <CardMedia
            component="img"
            height="200"
            image={this.props.img}
            alt="Product image"
          />
        </CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: 400,
              fontSize: "20px",
            }}
          >
            <Grid container columnSpacing={1} rowSpacing={4}>
              <Grid item xs={12} md={12}>
                {this.props.name}
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  color: "#CFCFCF",
                  textAlign: "center",
                  fontWeight: "100",
                  fontSize: "18px",
                  marginTop: "-20px",
                }}
              >
                ${this.props.price}
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            spacing={1}
            style={{
              marginTop: "40px",
            }}
          >
            <Grid item md={6}>
              <Button
                variant="text"
                size="medium"
                color="primary"
                style={{
                  float: "right",
                }}
              >
                Details
              </Button>
            </Grid>
            <Grid item md={6}>
              <Button
                variant="text"
                size="medium"
                color="error"
                disableElevation
                onClick={() => {
                  
                  const product = {
                    name: this.props.name,
                    price: this.props.price,
                    img: this.props.img
                  }

                  storedProducts.push(product);

                  localStorage.setItem('cart', JSON.stringify(storedProducts));

                  console.log(localStorage.getItem('cart'));
                  toast.success(`${this.props.name} added to the cart`);
                }}
                style={{
                  float: "left",
                  color: "#CFCFCF",
                }}
                startIcon={<LocalMallIcon fontSize="small" />}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </CardActions>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#151C27",
              color: "#fff",
              fontFamily: "monospace",
            },
          }}
        />
      </Card>
    );
  }
}

export default ProductCard;
