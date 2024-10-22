import { Link } from "react-router-dom";
import Badge from "@/components/Badge";

function ProductCard() {
  const cartButtonInteractive = `hover:opacity-70 focus:opacity-70 active:opacity-70`;
  function handleCartButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <Link to="/products/1" className="inline-flex flex-col gap-16 overflow-hidden">
      <div className="flex flex-col gap-8 order-last">
        <h2 className="paragraph text-md text-content">[풀무원] 탱탱쫄면 (4개입)</h2>
        <strong className="label text-lg text-content">4,980원</strong>
        <span className="label text-sm text-gray-400 order-first">샛별배송</span>
        <span className="paragraph text-sm text-gray-400">튀기지 않아 부담없는 매콤함</span>
        <div className="flex justify-start items-center gap-8">
          <Badge purpose="only" />
          <Badge purpose="limit" />
        </div>
      </div>
      <div className="relative">
        <figure className="overflow-hidden">
          <img src="/product01.png" alt="" className="h-320 hover:scale-105" />
          <figcaption>[풀무원] 탱탱쫄면 (4개입)</figcaption>
        </figure>
        <button
          type="button"
          className={`absolute right-16 bottom-20 inline-flex justify-center items-center w-45 h-45 bg-cartBg opacity-50 rounded-full z-50 ${cartButtonInteractive}`}
          onClick={handleCartButton}
        >
          <span className="relative -left-5 icon icon-cart text-xl text-white"></span>
        </button>
      </div>
    </Link>
  )
}

export default ProductCard;