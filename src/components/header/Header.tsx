import TopBanner from "@/components/header/TopBanner";
import List from "@/components/List";

function Header() {
  return (
    <header className="w-full mx-auto">
      <TopBanner />
      <List type="header" />
    </header>
  )
}

export default Header;