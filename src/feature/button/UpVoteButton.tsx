import { memo } from "react";
import { ArrowUpIcon } from "../icon/ArrowUpIcon";
import styles from "./UpVoteButton.module.css";

type Props = {
  selected: boolean;
  onClick: () => void;
};

const UpVoteButton = memo<Props>(({ selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.upvote}
      data-selected={selected}
    >
      <ArrowUpIcon size={40} />
    </button>
  );
});

UpVoteButton.displayName = "UpVoteButton";

export default UpVoteButton;
