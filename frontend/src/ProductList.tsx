import Product from "./Product"
import { Grid } from "@mui/material"

export default function ProductList() {
  return (
    <div title="ProductList">
      <p> product list </p>
      <Grid container>
        <Grid xs={3}>
          <Product></Product>
        </Grid>
        <Grid xs={3}>
          <Product></Product>
        </Grid>
        <Grid xs={3}>
          <Product></Product>
        </Grid>
        <Grid xs={3}>
          <Product></Product>
        </Grid>
      </Grid>
    </div>
  )
}