"use client"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"

export default function CartSidebar() {
  const router = useRouter()
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-xl flex flex-col transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Your Cart ({totalItems})</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-400 text-sm text-center mt-10">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-3">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">Size: {item.size}</p>
                  <p className="text-sm font-semibold mt-1">Rs. {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="w-6 h-6 rounded border border-gray-300 text-gray-600 text-sm hover:bg-gray-100"
                    >−</button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="w-6 h-6 rounded border border-gray-300 text-gray-600 text-sm hover:bg-gray-100"
                    >+</button>
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="ml-2 text-xs text-red-400 hover:text-red-600"
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-200">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold">Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">Shipping calculated at checkout</p>
            <button
              onClick={() => { setIsCartOpen(false); router.push("/checkout") }}
              className="w-full bg-black text-white rounded-lg py-3 text-sm font-medium hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}