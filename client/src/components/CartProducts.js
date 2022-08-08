import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

export default class CartProducts extends Component {
  render() {
    return (
      <div>
        <Stack direction="row" spacing={3}>
          <Avatar
            alt="Remy Sharp"
            variant="rounded"
            sx={{ width: 56, height: 56 }}
            src={this.props.img}
          />
          <p style={{ margin: "auto" }}>Product: {this.props.name}</p>
          <p style={{ margin: "auto" }}>Price: ${this.props.price}</p>
          <IconButton style={{ margin: "auto" }}>
            <DeleteIcon color="error" />
          </IconButton>
        </Stack>
      </div>
    );
  }
}
