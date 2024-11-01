// import Input from "@/components/Input";
// import Divide from "@/components/Divide";

function CartList() {
  return (
    <section className="w-740">
      <div className="flex">
        {/* <Input type="checkbox" labelText="전체선택(3/3)" iconHide={true} />
        <Divide height={10} bgColor="text-content" mx={8} />
        <button type="button" className="label text-md text-content">선택삭제</button> */}
      </div>
      <ul>
        <li className="relative flex justify-start items-center gap-12 py-16 border-b border-solid border-black">
          <span className="icon icon-food_refrigerated text-xl text-green"></span>
          <span className="label text-md text-black">냉장 식품</span>
          <button type="button" className="flex justify-center items-center p-4"><span className="absolute right-0 icon icon-arrow_bottom text-xl text-content"></span></button>
        </li>
        <li className="relative flex justify-start items-center gap-12 py-16 border-b border-solid border-black">
          <span className="icon icon-food_frozen text-xl text-blue-300"></span>
          <span className="label text-md text-black">냉동 식품</span>
          <button type="button" className="flex justify-center items-center p-4"><span className="absolute right-0 icon icon-arrow_bottom text-xl text-content"></span></button>
        </li>
        <li className="relative flex justify-start items-center gap-12 py-16 border-b border-solid border-black">
          <span className="icon icon-food_normal text-xl text-accent"></span>
          <span className="label text-md text-black">상온 식품</span>
          <button type="button" className="flex justify-center items-center p-4"><span className="absolute right-0 icon icon-arrow_bottom text-xl text-content"></span></button>
        </li>
      </ul>
    </section>
  )
}

export default CartList;