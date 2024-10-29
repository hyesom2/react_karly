import Carousel from "@/components/Carousel/Carousel";

function MainProducts() {
  
  return (
    <main className="w-1050 mx-auto">
      <div className="py-40">
        <header className="h-64 mb-28">
          <h1 className="heading text-xl text-content p-8 text-center">이 상품 어때요?</h1>
        </header>
        <Carousel type="products" />
      </div>
      <div className="py-40">
        <img src="/line-banner.png" alt="line-banner" />
      </div>
      <div className="py-40">
        <header className="h-64 mb-28">
          <h1 className="heading text-xl text-content p-8 text-center">놓치면 후회할 가격</h1>
        </header>
        <Carousel type="products" />
      </div>
    </main>
  )
}

export default MainProducts;