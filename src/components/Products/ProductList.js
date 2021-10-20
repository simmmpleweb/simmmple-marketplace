import React from 'react';
import { Grid, } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap="22px">
            {
                products.map(({...otherProductProps}, index) => {
                    return (
                        <ProductItem 
                            key={index}
                            {...otherProductProps}
                        />
                    )
                })
            }
        </Grid>
    )
}

export default ProductList
