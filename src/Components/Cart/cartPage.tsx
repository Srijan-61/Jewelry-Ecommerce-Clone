import { useState } from "react";
import { Trash2, Plus, Minus, Tag, FileText, Lock } from "lucide-react";
import { useCart } from "../Shared/CartContext";

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } =
    useCart();
  const [promoCode, setPromoCode] = useState("");
  const [note, setNote] = useState("");
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [showNoteInput, setShowNoteInput] = useState(false);

  const subtotal = getTotalPrice();
  const delivery = 0;
  const total = subtotal + delivery;

  return (
    <div className="bg-primary w-full min-h-screen">
      <div className="max-w-[2018px] mx-auto px-6 md:px-16 py-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center  h-full">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8">
              My cart
            </h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
                <a href="/shopall">
                  <button className="bg-black text-white px-8 py-3 border border-black hover:bg-transparent hover:text-black transition duration-300">
                    Continue Shopping
                  </button>
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="w-full sm:w-32 h-32 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                          <div>
                            <h3 className="text-lg font-medium text-gray-800">
                              {item.name}
                            </h3>
                            <p className="text-gray-600">
                              €{item.price.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                              Category: {item.category}
                            </p>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-lg font-medium">
                              €{(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-12 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Promo Code and Note Sections */}
            <div className="mt-8 space-y-4">
              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={() => setShowPromoInput(!showPromoInput)}
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Tag size={16} />
                  Enter a promo code
                </button>
                {showPromoInput && (
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
                      placeholder="Enter promo code"
                    />
                    <button className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
                      Apply
                    </button>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setShowNoteInput(!showNoteInput)}
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <FileText size={16} />
                  Add a note
                </button>
                {showNoteInput && (
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="mt-3 w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2 resize-none"
                    rows={3}
                    placeholder="Add special instructions or notes..."
                  />
                )}
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-[#f8f9fa] p-6 rounded-lg sticky top-6">
              <h2 className="text-2xl font-light mb-6">Order summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="w-full bg-gray-800 text-white py-3 px-6 text-lg font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                Checkout
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Lock size={16} />
                <span>Secure Checkout</span>
              </div>

              <div className="mt-4 text-xs text-gray-500 text-center">
                <span className="underline cursor-pointer">Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
