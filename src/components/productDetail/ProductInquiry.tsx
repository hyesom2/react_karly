import Button from "@/components/Button";
import Badge from "@/components/Badge";

function ProductInquiry() {
  return (
    <div className="flex flex-col gap-56">
      <header className="relative flex flex-col justify-start items-start">
        <h2 className="heading text-xl text-black mb-24">상품문의</h2>
        <ul>
          <li className="label text-sm text-gray-500">상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
          <li className="label text-sm text-gray-500">배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.</li>
        </ul>
        <Button type="button" bgColor="primary" width={155} height={44} className="absolute top-0 right-0">문의하기</Button>
      </header>
      <section>
        <div className="flex flex-col gap-16">
          <h3 className="sr-only">상품문의 게시판</h3>
          <table className="w-1050 mx-auto border-collapse">
            <thead className="bg-white border-t-2 border-b border-solid border-black">
              <tr className="flex">
                <th className={`label text-md text-black py-16 w-full flex-shrink-0`}>제목</th>
                <th className={`label text-md text-black py-16 w-100 flex-shrink-0`}>작성자</th>
                <th className={`label text-md text-black py-16 w-100 flex-shrink-0`}>작성일</th>
                <th className={`label text-md text-black py-16 w-100 flex-shrink-0`}>답변상태</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-solid border-gray-100">
                <td tabIndex={0} className="flex justify-start items-center gap-20 label text-md text-content px-20 py-16 cursor-pointer"><Badge purpose="notice">공지</Badge>판매(일시)중단 제품 안내 (22.11.10 업데이트)</td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>칼리</td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>2017.02.01</td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>-</td>
              </tr>
              {/* ========== 1. 공개 / 답변완료 ========== */}
              <tr className="bg-white border-b border-solid border-gray-100">
                <td tabIndex={0} className="flex justify-start items-center gap-20 label text-md text-content px-20 py-16 cursor-pointer">팩이 터져서 왔어요 ㅠㅠ</td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>김*식</td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>2024.11.01</td>
                <td className={`label text-md text-primary py-16 text-center w-100 flex-shrink-0`}>답변완료</td>
              </tr>
              <tr className="bg-gray-50 border-b border-solid border-gray-100">
                <td colSpan={4}>
                  {/* ========== 1. 공개글 / 답변 ========== */}
                  <div className="flex flex-col gap-40 p-20">
                    <div className="flex justify-start items-start gap-12">
                      <span className="icon icon-question text-24 text-white bg-secondary w-24 h-24 rounded-full"></span>
                      <p className="label text-sm text-content whitespace-pre-line">
                        {`스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요.
                        환불 요청합니다.`}
                      </p>
                    </div>
                    <div className="flex justify-start items-start gap-12">
                      <span className="icon icon-answer text-24 text-white bg-primary w-24 h-24 rounded-full"></span>
                      <div className="flex flex-col gap-12">
                        <p className="label text-sm text-content whitespace-pre-line">
                          {`안녕하세요. 칼리입니다.
                          믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다.

                          더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다.
                          다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다.

                          불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다.
                          칼리 드림.`}
                        </p>
                        <time dateTime="2022-11-01" className="label text-sm text-gray-400">2024.11.01</time>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* ========== 2. 비공개 / 답변완료 ========== */}
              <tr className="bg-white border-b border-solid border-gray-100">
                <td tabIndex={0} className="flex justify-start items-center gap-20 label text-md text-gray-400 px-20 py-16 cursor-pointer">비밀글입니다.<span className="icon icon-lock text-md text-lock"></span></td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>이*순</td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>2024.11.01</td>
                <td className={`label text-md text-primary py-16 text-center w-100 flex-shrink-0`}>답변완료</td>
              </tr>
              {/* ========== 3. 공개 / 답변대기 ========== */}
              <tr className="bg-white border-b border-solid border-gray-100">
                <td tabIndex={0} className="flex justify-start items-center gap-20 label text-md text-gray-400 px-20 py-16 cursor-pointer">비밀글입니다.<span className="icon icon-lock text-md text-lock"></span></td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>이*재</td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>2024.10.25</td>
                <td className={`label text-md text-gray-400 py-16 text-center w-100 flex-shrink-0`}>답변대기</td>
              </tr>
            </tbody>
          </table>
          <nav className="flex justify-center items-center gap-16">
            <Button type="button" purpose="nav">
              <span className="icon icon-arrow_left text-36 text-gray-100"></span>
            </Button>
            <Button type="button" purpose="nav">
              <span className="icon icon-arrow_right text-36 text-primary"></span>
            </Button>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default ProductInquiry;