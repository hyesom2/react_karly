interface SpriteIconsProps {
  type: string,
}

function SpriteIcons({ type }: SpriteIconsProps) {
  switch (type) {
    case "logo": {
      return (
        <h1 className="icon-sprite logo" aria-label="마켓칼리 로고">
          <a href="/"></a>
        </h1>
      )
    }
    case "blog": {
      return (
        <a href="/" className="icon-sprite sns blog" aria-hidden="true"></a>
      )
    }
    case "facebook": {
      return (
        <a href="https://www.facebook.com/Marketkurly/" target="_blank" className="icon-sprite sns facebook" aria-hidden="true"></a>
      )
    }
    case "instagram": {
      return (
        <a href="https://www.instagram.com/marketkurly" target="_blank" className="icon-sprite sns instagram" aria-hidden="true"></a>
      )
    }
    case "naver-post": {
      return (
        <a href="https://m.post.naver.com/marketkurly" target="_blank" className="icon-sprite sns naver-post" aria-hidden="true"></a>
      )
    }
    case "youtube": {
      return (
        <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" target="_blank" className="icon-sprite sns youtube" aria-hidden="true"></a>
      )
    }
    case "isms": {
      return (
        <a href="/" className="icon-sprite footer isms" aria-hidden="true"></a>
      )
    }
    case "privacy": {
      return (
        <a href="/" className="icon-sprite footer privacy" aria-hidden="true"></a>
      )
    }
    case "toss-payments": {
      return (
        <a href="/" className="icon-sprite footer toss-payments" aria-hidden="true"></a>
      )
    }
    case "woori-bank": {
      return (
        <a href="/" className="icon-sprite footer woori-bank" aria-hidden="true"></a>
      )
    }
  }
}

export default SpriteIcons;