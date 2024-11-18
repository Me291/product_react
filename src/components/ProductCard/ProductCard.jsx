import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const productSlug = product?.slug || '';
  const productImage = product?.imageUrl || '';
  const productName = product?.name || 'No Title';
  const productCategory = product?.category || 'Uncategorized';
  const productPrice = product?.price || 0;
  const isOutOfStock = product?.stock <= 0;

  return (
    <Link
      to={`/products/${productSlug}`}
      className="flex flex-col max-w-[370px] p-6 bg-[#1C2A38] rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-[#6247eb] active:ring-2 active:ring-opacity-90"
    >
      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-[250px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-3">
        <h4 className="font-semibold text-lg text-white">{productName}</h4>
        <span className="text-sm text-[#d1d1d1]">{productCategory}</span>
        <span className="text-xl font-semibold text-white">
          {productPrice > 0 ? formatToIDRCurrency(productPrice) : 'Not For Sale'}
        </span>

        {/* Stock Status and Button */}
        <div className="mt-4">
          {isOutOfStock ? (
            <p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
          ) : (
            <>
              {product.stock <= 25 && product.stock !== 0 && (
                <p className="text-xl font-semibold text-center text-yellow-500">Almost Sold Out</p>
              )}
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-white rounded-lg hover:bg-[#5969cf] active:bg-[#4956ab] w-full mt-4 transform transition-transform duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span>Add to Cart</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
