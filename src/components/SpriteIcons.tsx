import { useNavigate, Link } from 'react-router-dom'

interface SpriteIconsProps {
  type: string,
}

function SpriteIcons({ type }: SpriteIconsProps) {
  const navigate = useNavigate();

  switch (type) {
    case "logo": {
      return (
        <h1 className="icon-sprite logo" aria-label="마켓칼리 로고">
          <Link to="/"></Link>
        </h1>
      )
    }
    case "blog": {
      return (
        <Link to="/" className="icon-sprite sns blog" aria-hidden="true"></Link>
      )
    }
    case "facebook": {
      return (
        <Link to="https://www.facebook.com/Marketkurly/" target="_blank" className="icon-sprite sns facebook" aria-hidden="true"></Link>
      )
    }
    case "instagram": {
      return (
        <Link to="https://www.instagram.com/marketkurly" target="_blank" className="icon-sprite sns instagram" aria-hidden="true"></Link>
      )
    }
    case "naver-post": {
      return (
        <Link to="https://m.post.naver.com/marketkurly" target="_blank" className="icon-sprite sns naver-post" aria-hidden="true"></Link>
      )
    }
    case "youtube": {
      return (
        <Link to="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" target="_blank" className="icon-sprite sns youtube" aria-hidden="true"></Link>
      )
    }
    case "isms": {
      return (
        <button type="button" className="icon-sprite footer isms" onClick={ () => navigate("/") }></button>
      )
    }
    case "privacy": {
      return (
        <button type="button" className="icon-sprite footer privacy" onClick={ () => navigate("/") }></button>
      )
    }
    case "toss-payments": {
      return (
        <button type="button" className="icon-sprite footer toss-payments" onClick={ () => navigate("/") }></button>
      )
    }
    case "woori-bank": {
      return (
        <button type="button" className="icon-sprite footer woori-bank" onClick={ () => navigate("/") }></button>
      )
    }
  }
}

export default SpriteIcons;