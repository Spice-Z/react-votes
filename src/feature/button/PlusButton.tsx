import { memo } from "react";
import { PlusIcon } from "../icon/PlusIcon";
import styles from "./PlusButton.module.css";

type Props = {
  onClick: () => void;
};
const PlusButton = memo<Props>(({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <PlusIcon size={40} />
    </button>
  );
});

PlusButton.displayName = "PlusButton";

export default PlusButton;
