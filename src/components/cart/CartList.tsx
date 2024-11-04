import { useId } from "react";
import Divide from "@/components/Divide";
import Button from "@/components/Button";

function CartList() {
  const checkboxId = useId();

  return (
    <section className="w-740">
      <div className="flex items-center my-16">
        <div className="flex flex-row-reverse gap-8">
          <label htmlFor={checkboxId} className="label text-md text-content">전체선택(3/3)</label>
          <input type="checkbox" id={checkboxId} />
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <button type="button" className="label text-md text-content">선택삭제</button> 
      </div>
      <div>
        <button type="button" className="relative flex justify-start items-center gap-12 w-full py-16 border-b border-solid border-black">
          <span className="icon icon-food_refrigerated text-xl text-green"></span>
          <span className="label text-md text-black">냉장 식품</span>
          <span className="absolute right-0 icon icon-arrow_bottom text-xl text-content p-4"></span>
        </button>
        <ul className="flex flex-col">
          <li className="flex flex-row justify-start items-center gap-8 px-8 py-20">
            <input type="checkbox" />
            <a href="/">
              <img src="/product01.png" alt="" className="w-60 h-auto" />
            </a>
            <a href="/" className="flex-grow">
              <strong className="label text-md text-black">[풀무원] 탱탱쫄면(4개입)</strong>
            </a>
            <Button purpose="count" />
            <strong className="label text-md text-black w-128 text-right">4,980원</strong>
            <button type="button" className="flex justify-center items-center w-30 h-30">
              <span className="icon icon-cancel text-lg text-gray-200"></span>
            </button>
          </li>
        </ul>
        <button type="button" className="relative flex justify-start items-center gap-12 w-full py-16 border-b border-solid border-black">
          <span className="icon icon-food_frozen text-xl text-blue-300"></span>
          <span className="label text-md text-black">냉동 식품</span>
          <span className="absolute right-0 icon icon-arrow_bottom text-xl text-content p-4"></span>
        </button>
        <ul>
        </ul>
        <button type="button" className="relative flex justify-start items-center gap-12 w-full py-16 border-b border-solid border-black">
          <span className="icon icon-food_normal text-xl text-accent"></span>
          <span className="label text-md text-black">상온 식품</span>
          <span className="absolute right-0 icon icon-arrow_bottom text-xl text-content p-4"></span>
        </button>
        <ul>
        </ul>
      </div>
    </section>
  )
}

export default CartList;