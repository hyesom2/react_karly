import TopBanner from "@/components/header/TopBanner";
import List from "@/components/List";
import SpriteIcons from "@/components/SpriteIcons";

function Header() {
  return (
    <header className="w-full mx-auto">
      <TopBanner />
      <List type="header" />
      <SpriteIcons type="logo" />
    </header>
  )
}

export default Header;