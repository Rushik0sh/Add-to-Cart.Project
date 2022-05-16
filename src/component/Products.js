import React from 'react'
import { useEffect } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { useSelector } from 'react-redux'
import { STATUSES } from '../store/productSlice'
import loading from '../loading.gif'

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([])
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // }
    // fetchProducts();
  }, [])

  if (status === STATUSES.LOADING){
    return <img src={loading} alt="Error" style={{width:"5rem",height:"5rem",margin:'5rem 27rem' }}/>
  }

  if(status === STATUSES.ERROR){
    return <h2>ERROR......</h2>
  }

  const handleadd = (product) => {
    dispatch(add(product));
  }
  return (
    <div className='productsWrapper'>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => { handleadd(product) }}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products