import type { ProductDisplayProps } from "../../types/index"
import noImageAvailable from '../../assets/no-image-available.svg'

export function ProductDisplay({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps){
    return (
        <div>
            {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} />
            ) : (
                <img src={noImageAvailable} alt="no image available" />
            )
                }
        </div>
    )
}