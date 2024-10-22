import MenuSpriteIcons from "@/components/MenuSpriteIcons";

function Menu() {
  return (
    <aside className="absolute top-full left-0 overflow-y-scroll">
      <ul className="h-640">
        <MenuSpriteIcons type="gift">선물</MenuSpriteIcons>
        <MenuSpriteIcons type="vegetable">채소</MenuSpriteIcons>
        <MenuSpriteIcons type="fruits">과일 · 견과 · 쌀</MenuSpriteIcons>
        <MenuSpriteIcons type="seafood">수산 · 해산 · 건어물</MenuSpriteIcons>
        <MenuSpriteIcons type="meat">정육 · 계란</MenuSpriteIcons>
        <MenuSpriteIcons type="soup">국 · 반찬 · 메인요리</MenuSpriteIcons>
        <MenuSpriteIcons type="salary">샐러드 · 간편식</MenuSpriteIcons>
        <MenuSpriteIcons type="oil">면 · 양념 · 오일</MenuSpriteIcons>
        <MenuSpriteIcons type="drink">생수 · 음료 · 우유 · 커피</MenuSpriteIcons>
        <MenuSpriteIcons type="snack">간식 · 과자 · 떡</MenuSpriteIcons>
        <MenuSpriteIcons type="bakery">베이커리 · 치즈 · 델리</MenuSpriteIcons>
        <MenuSpriteIcons type="drug">건강식품</MenuSpriteIcons>
        <MenuSpriteIcons type="wine">와인</MenuSpriteIcons>
        <MenuSpriteIcons type="traditional-liquor">전통주</MenuSpriteIcons>
        <MenuSpriteIcons type="living">생활용품 · 리빙 · 캠핑</MenuSpriteIcons>
        <MenuSpriteIcons type="skincare">스킨케어 · 메이크업</MenuSpriteIcons>
        <MenuSpriteIcons type="hair">헤어 · 바디 · 구강</MenuSpriteIcons>
        <MenuSpriteIcons type="kitchen">주방용품</MenuSpriteIcons>
        <MenuSpriteIcons type="appliances">가전제품</MenuSpriteIcons>
        <MenuSpriteIcons type="pets">반려동물</MenuSpriteIcons>
        <MenuSpriteIcons type="baby">베이비 · 키즈 · 완구</MenuSpriteIcons>
        <MenuSpriteIcons type="travel">여행 · 티켓</MenuSpriteIcons>
      </ul>
    </aside>
  )
}

export default Menu;