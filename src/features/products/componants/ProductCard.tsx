"use client";

import {
  faArrowsRotate,
  faCartPlus,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Product } from "../types/products.types";
import Rating from "@/components/ui/Rating";
import addProductToCart, {
  getLoggedUserCart,
} from "@/features/cart/server/cart.actions";
import { toast } from "react-toastify";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "@/features/wishlist/server/wishlist.actions";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/features/wishlist/store/wishlist.slice";
import { useState } from "react";

export default function ProductCard({ info }: { info: Product }) {
  const {
    title,
    category,
    imageCover,
    price,
    ratingsAverage,
    ratingsQuantity,
    priceAfterDiscount,
    id,
  } = info;
  const dispatch = useAppDispatch();
  const wishlistIds = useAppSelector((state) => state.wishlist.wishlistIds);
  const [isWishlisting, setIsWishlisting] = useState(false);

  const isInWishlist = wishlistIds.includes(id);

  const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;
  const discountPercentage = priceAfterDiscount
    ? Math.round((price - priceAfterDiscount) / price) * 100
    : 0;

  const handleWishlistToggle = async () => {
    setIsWishlisting(true);
    try {
      if (isInWishlist) {
        const response = await removeProductFromWishlist({ productId: id });
        if (response.status === "success") {
          dispatch(removeFromWishlist(id));
          toast.success("Removed from wishlist");
        }
      } else {
        const response = await addProductToWishlist({ productId: id });
        if (response.status === "success") {
          dispatch(addToWishlist(id));
          toast.success(response.message);
        }
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsWishlisting(false);
    }
  };

  const handelAddToCart = async () => {
    try {
      const response = await addProductToCart({ productId: id });
      console.log(response);
      if (response.status === "success") {
        toast.success(response.message);
        const cartInfo = await getLoggedUserCart();
        dispatch(setCartInfo(cartInfo));
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div
        id="product-card"
        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
      >
        <div className="relative">
          <img
            className="w-full h-60 object-containbg-white"
            src={imageCover}
            alt={title}
          />

          <div className="absolute top-3 left-3">
            {onSale && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <button
              onClick={handleWishlistToggle}
              disabled={isWishlisting}
              className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isInWishlist
                  ? "bg-red-50 text-red-500 shadow-sm"
                  : "bg-white text-gray-600 hover:text-primary-500 hover:bg-primary-50"
              } ${isWishlisting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {isWishlisting ? (
                <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <FontAwesomeIcon icon={faHeart} />
              )}
            </button>

            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-500 hover:bg-primary-50">
              <FontAwesomeIcon icon={faArrowsRotate} />
            </button>

            <Link
              href={`/Product/${id}`}
              className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-500 hover:bg-primary-50"
            >
              <FontAwesomeIcon icon={faEye} />
            </Link>
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{category.name} </div>

          <h3 className="font-medium mb-1 cursor-pointer ">
            <Link className="line-clamp-2" href={`/Product/${id}`}>
              {title}
            </Link>
          </h3>

          <div className="flex items-center mb-2">
            <div className="flex text-amber-400 mr-2">
              <Rating rating={ratingsAverage} />
            </div>

            <span className="text-xs text-gray-500">
              {ratingsAverage} ({ratingsQuantity} reviews)
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-primary-600">
                {priceAfterDiscount || price} EGP
              </span>

              {onSale && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  {price} EGP
                </span>
              )}
            </div>
            <button
              className="bg-primary-600 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
              onClick={handelAddToCart}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
