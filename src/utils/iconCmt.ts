import {
  faUser,
  faCartShopping,
  faBars,
  faClose,
  faTrash,
  faRing,
  faPersonDress,
  faPerson,
  faTvAlt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { IconComponent } from "../types/icon";

export const getIconComponent = (icon: IconComponent): IconDefinition => {
  let iconComponent;
  switch (icon) {
    case "faUser":
      iconComponent = faUser;
      break;
    case "faCartShopping":
      iconComponent = faCartShopping;
      break;
    case "faBars":
      iconComponent = faBars;
      break;
    case "faClose":
      iconComponent = faClose;
      break;
    case "faTrash":
      iconComponent = faTrash;
      break;
    case "faTvAlt":
        iconComponent = faTvAlt;
        break;
    case "faRing":
        iconComponent = faRing;
        break;
    case "faPersonDress":
        iconComponent = faPersonDress;
        break;
    case "faPerson":
        iconComponent = faPerson;
        break;
    default:
      iconComponent = faUser;
      break;
  }
  return iconComponent;
};
