"use client";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Cartitem from "../components/Cartitem";
import CartSummary from "../components/CartSummary";
import { clearLoggedUserCart } from "../server/cart.actions";
import { clearCart } from "../store/cart.slice";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function CartScreen() {
  const { numOfCartItems, totalCartPrice, products } = useAppSelector(
    (state) => state.cart,
  );
  const dispatch = useAppDispatch();

  async function handleClearCart() {
    const result = await Swal.fire({
      html: `
      <div class="text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Clear Cart</h3>
        <p class="text-gray-600 mb-6">Are you sure you want to remove all items from your cart?</p>
      </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Clear All",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      customClass: {
        popup: `rounded-2xl shadow-2xl border-0 p-0`,
        htmlContainer: `p-6 m-0`,
        actions: `px-6 pb-6 pt-0 gap-3 flex-row-reverse`,
        confirmButton: ` bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200`,
        cancelButton: ` bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200`,
      },
    });

    if (result.isConfirmed) {
      dispatch(clearCart());
      toast.success("All items removed from cart");
      try {
        await clearLoggedUserCart();
      } catch (error) {
        console.log(error);
        toast.error("Failed to clear cart from server");
      }
    }
  }

  return (
    <>
      <div className=" bg-gray-50 min-h-screen py-8">
        <div className=" container mx-auto px-4">
          <div className=" mb-8">
            <nav className=" flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link href="/" className=" hover:text-primary-600 transition">
                Home
              </Link>
              <span>/</span>
              <span className=" text-gray-900 font-medium ">Shopping Cart</span>
            </nav>

            <div className=" flex items-center justify-between">
              <div>
                <h1 className=" text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className=" bg-linear-to-r from-primary-600 to-primary-700 text-white w-12 h-12 rounded-xl flex items-center justify-center font-medium">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                  Shopping Cart
                </h1>
                <p className=" text-gray-500 mt-2">
                  You have {""}
                  <span className=" font-semibold text-primary-600">
                    {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"}
                  </span>
                  {""}
                  in your cart
                </p>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* {cart items} */}
            <div className=" lg:col-span-2">
              {/* }cart item list */}
              <div className=" space-y-4">
                {products.map((product) => (
                  <Cartitem key={product._id} info={product} />
                ))}
              </div>
              {/* clear cart */}
              <div className=" mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <Link
                  href="/"
                  className=" text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                >
                  <span> ⬅️ </span> Continue Shopping
                </Link>

                <button
                  onClick={handleClearCart}
                  className=" group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors duration-300 "
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" text-xs group-hover:scale-110 transition-transform"
                  />
                  <span>Clear all items</span>
                </button>
              </div>
            </div>

            <div className=" lg:col-span-1">
              <CartSummary
                totalCartPrice={totalCartPrice}
                numOfCartItems={numOfCartItems}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
