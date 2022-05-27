import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { useEffect, useState } from 'react';

export default () => {
    
    const [products,setProducts] = useState([]);
    useEffect(()=>{
      getProducts();
  },[]);

    const columns = [
          {
            label: 'Image',
            field: 'thumbnail',
          },
          {
            label: 'Brand',
            field: 'brand',
            sort: 'asc',
          },
          {
            label: 'Title',
            field: 'title',
            sort: 'asc',
          },
          {
            label: 'Price',
            field: 'price',
            sort: 'asc',
          },
          {
            label: 'Rating',
            field: 'rating',
            sort: 'asc',
          },
          {
            label: 'Category',
            field: 'category',
            sort: 'asc',
          },
    ];

    const getProducts = () => {
        axios.get('https://dummyjson.com/products')
             .then((res)=>{
                   let products = res.data.products.map( product => {
                         product['thumbnail'] = <img className='table-img'  src={product?.thumbnail} />;
                         return product;
                   }); 
                     setProducts(products);

             }).catch((err) => {
             })
    }
    
    return (
        <div className='page-wrapper'>
            <h1>Table</h1>
            <MDBDataTable
            striped
            bordered
            small
            data={{columns: columns, rows: products }}
          />
        </div>
    )
}
