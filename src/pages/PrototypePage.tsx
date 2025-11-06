import '../less/prototype.less'
import axios from 'axios'
import { productStore } from '../store/productStore'
import type { Product } from '../types/Product'
import { useEffect } from 'react'
import { MdLocalGroceryStore } from 'react-icons/md';
import { useState } from 'react'

export default function PrototypePage() {
  const { products, addProduct } = productStore()
  const [count, setCount] = useState<number>(3)
  const [text, setText] = useState<string>('View All Products')
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  
  useEffect(() => {
    axios.get<Product[]>('data.json')
      .then((res) => addProduct(res.data))
  }, [])
  
  function addChange() {
    setIsExpanded(!isExpanded)
    setText(isExpanded ? "View All Products" : "Close")
    setCount(isExpanded ? 3 : 6)
  }
  
  return (
    <main className="prototype" id='products'>
      <div className="container">
        <h2  className="square animate__animated animate__fadeInDown wow">Featured Products</h2>
        <article className={isExpanded ? 'expanded' : ''}>
          {products.slice(0, count).map((p, index) => (
            <div 
              key={p.id} 
              className={`product-item ${index >= 3 ? 'extra-item' : ''}`}
            >
              <article>
                <img src={p.img} alt={p.title} />
                <div>
                  <button>Preview</button>
                  <nav>
                    <MdLocalGroceryStore style={{fontSize: 26}}/>
                  </nav>
                </div>
              </article>
              <h3>{p.title}</h3>
              <nav>
                <p>${p.price}</p>
                <span>Sold: {p.sold}</span>
              </nav>
            </div>
          ))}
        </article>
        <button onClick={addChange}>{text}</button>
      </div>
    </main>
  )
}