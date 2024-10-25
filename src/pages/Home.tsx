import MainBanner from "@/components/MainBanner";
import Popup_ad from '@/components/Popup_ad';
import popupAdStore from '@/stores/components/popupAdStore';

function Home() {
  const { show } = popupAdStore();
  
  return (
    <>
      <MainBanner />
      { show && <Popup_ad /> }
    </>
  )
}

export default Home;