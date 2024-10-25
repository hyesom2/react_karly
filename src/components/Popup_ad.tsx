import { Link } from "react-router-dom";
import Button from "@/components/Button";
import popupAdStore from '@/stores/components/popupAdStore';

function Popup_ad() {
  const { setShow } = popupAdStore();

  return (
    <Link to="/" className="absolute top-1/4 left-1/4 block w-440 rounded-tl-16 rounded-tr-16 overflow-hidden">
      <img src="/ad.png" alt="ad" />
      <div role="group" className="w-full">
        <Button purpose="popup_ad" className="rounded-bl-16" onClick={setShow}>오늘 하루 안 보기</Button>
        <Button purpose="popup_ad" className="rounded-br-16" onClick={setShow}>닫기</Button>
      </div>
    </Link>
  )
}

export default Popup_ad;