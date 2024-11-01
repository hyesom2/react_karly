import Button from "@/components/Button";

function Address() { 
  return (
    <section className="flex flex-col items-start gap-12 bg-white p-20 border border-solid border-gray-100">
      <header className="flex flex-row-reverse justify-start items-center">
        <h2 className="label text-md text-black">배송지</h2>
        <span className="icon icon-location text-36 text-content"></span>
      </header>
      <strong className="label text-md text-black">서울 중랑구 면목로 42길 11 (행운빌딩) 603호</strong>
      <span className="label text-sm text-primary">샛별배송</span>
      <Button type="button" bgColor="transparent" height={44}>배송지 변경</Button>
    </section>
  )
}

export default Address;