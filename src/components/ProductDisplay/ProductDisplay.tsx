import type { ProductDisplayProps } from "../../types/index";
import noImageAvailable from "../../assets/no-image-available.svg";

export function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div className="product-card">
      {product.imageUrl ? (
        <img
          className="product-image"
          src={product.imageUrl}
          alt={product.name}
        />
      ) : (
        <img
          className="product-image"
          src={noImageAvailable}
          alt="no image available"
          width={300}
          height={300}
        />
      )}
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>

      {showDescription && (
        <p className="product-description">{product.description}</p>
      )}

      {showStockStatus && (
        <p
          className={product.inStock ? "stock in-stock" : "stock out-of-stock"}
        >
          {product.inStock ? "In Stock" : "Out Of Stock"}
        </p>
      )}

      {product.inStock === false ? (
        <button
          className="product-card-button"
          onClick={() =>
            console.log(
              `You will be notified when ${product.name}is back in stock`,
            )
          }
        >
          Get Back In Stock Notification
        </button>
      ) : (
        // onClick={onAddToCart(product.id)}
        //         this does not work because it calls onAddToCart when the card
        //         renders, not on click, instead it needs a arrow function
        //         because onAddToCart has to receive the product's id

        <button
          className="product-card-button"
          onClick={() => onAddToCart?.(product.id)} ///creates a function that runs only on click and passes the id
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}
