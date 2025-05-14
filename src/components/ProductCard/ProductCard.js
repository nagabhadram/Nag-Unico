import {useState, useEffect} from 'react'
import './ProductCard.css'

const ProductCard = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem('cart')) || {},
  )
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) || [],
  )

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const handleAddToCart = productId => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
  }

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    setCart(prev => ({
      ...prev,
      [productId]: quantity,
    }))
  }

  const handleRemoveFromCart = productId => {
    const newCart = {...cart}
    delete newCart[productId]
    setCart(newCart)
  }

  const handleToggleFavorite = productId => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId],
    )
  }

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === Number(id))
    return product ? sum + product.price * qty : sum
  }, 0)

  return (
    <div className="product-wrapper">
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => {
          const isInCart = cart[product.id] || 0
          const isFavorite = favorites.includes(product.id)

          return (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button
                type="button"
                onClick={() => handleToggleFavorite(product.id)}
              >
                {isFavorite ? '❤️ Remove Favorite' : '🤍 Add Favorite'}
              </button>
              {isInCart > 0 ? (
                <div className="cart-controls">
                  <button
                    type="button"
                    onClick={() =>
                      handleUpdateQuantity(product.id, isInCart - 1)
                    }
                  >
                    -
                  </button>
                  <span>{isInCart}</span>
                  <button
                    type="button"
                    onClick={() =>
                      handleUpdateQuantity(product.id, isInCart + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          )
        })}
      </div>

      <div className="cart-summary">
        <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
      </div>

      <div className="cart-items-section">
        <h3>Cart Items</h3>
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {Object.entries(cart).map(([id, quantity]) => {
              const product = products.find(p => p.id === Number(id))
              if (!product) return null

              return (
                <li key={id} className="cart-item">
                  <img src={product.image} alt={product.title} />
                  <div className="cart-item-details">
                    <span>{product.title}</span>
                    <span>Qty: {quantity}</span>
                    <span>${(product.price * quantity).toFixed(2)}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className="favorites-section">
        <h3>Favorites</h3>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <ul>
            {favorites.map(favId => {
              const product = products.find(p => p.id === favId)
              return product ? (
                <li key={favId}>
                  <img src={product.image} alt={product.title} />
                  <span>{product.title}</span>
                </li>
              ) : null
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ProductCard
