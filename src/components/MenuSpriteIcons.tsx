import { ReactNode } from 'react';
import { Link } from "react-router-dom";

interface MenuSpriteIconsProps {
  type: string;
  children: ReactNode;
}

function MenuSpriteIcons({ type, children }: MenuSpriteIconsProps) {
  let typeClassName = "";

  switch (type) {
    case "gift": {
      typeClassName = "gift"
      break;
    }
    case "vegetable": {
      typeClassName = "vegetable"
      break;
    }
    case "fruits": {
      typeClassName = "fruits"
      break;
    }
    case "seafood": {
      typeClassName = "seafood"
      break;
    }
    case "meat": {
      typeClassName = "meat"
      break;
    }
    case "soup": {
      typeClassName = "soup"
      break;
    }
    case "salary": {
      typeClassName = "salary"
      break;
    }
    case "oil": {
      typeClassName = "oil"
      break;
    }
    case "drink": {
      typeClassName = "drink"
      break;
    }
    case "snack": {
      typeClassName = "snack"
      break;
    }
    case "bakery": {
      typeClassName = "bakery"
      break;
    }
    case "drug": {
      typeClassName = "drug"
      break;
    }
    case "wine": {
      typeClassName = "wine"
      break;
    }
    case "traditional-liquor": {
      typeClassName = "traditional-liquor"
      break;
    }
    case "living": {
      typeClassName = "living"
      break;
    }
    case "skincare": {
      typeClassName = "skincare"
      break;
    }
    case "hair": {
      typeClassName = "hair"
      break;
    }
    case "kitchen": {
      typeClassName = "kitchen"
      break;
    }
    case "appliances": {
      typeClassName = "appliances"
      break;
    }
    case "pets": {
      typeClassName = "pets"
      break;
    }
    case "baby": {
      typeClassName = "baby"
      break;
    }
    case "travel": {
      typeClassName = "travel"
      break;
    }
  }

  return (
    <li className="block h-40 bg-white px-12 hover:bg-gray-100">
      <Link to="/products" className="flex items-center h-full hover:text-primary">
        <span className={`iconSprite-menu ${typeClassName} mr-8`} aria-hidden="true"></span>
        <span className="label text-md whitespace-nowrap">{ children }</span>
      </Link>
    </li>
  )
}

export default MenuSpriteIcons;