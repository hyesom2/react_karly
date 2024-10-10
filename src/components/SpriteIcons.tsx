interface SpriteIconsProps {
  type: string,
}

function SpriteIcons({ type }: SpriteIconsProps) {
  switch (type) {
    case "logo": {
      return (
        <h1 className="icon-sprite logo" aria-label="마켓칼리 로고"></h1>
      )
    }
  }
}

export default SpriteIcons;