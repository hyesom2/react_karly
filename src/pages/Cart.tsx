import CartList from "@/components/cart/CartList";
import OrderSheet from "@/components/cart/OrderSheet";

function Cart() {
  return (
    <section className="flex flex-col justify-start items-center gap-44 py-80">
      <h1 className="label text-lg text-black">장바구니</h1>
      <div className="flex justify-start items-start gap-55">
        <CartList />
        <OrderSheet />
      </div>
    </section>
  )
}

export default Cart;