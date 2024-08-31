import { memo } from "react";
import UpVoteButton from "../button/UpVoteButton";
import styles from "./UpVoteList.module.css";
import PlusButton from "../button/PlusButton";

type Props = {
  upVotes: number;
  selected: boolean;
  onSelect: () => void;
  onAddUpVote: () => void;
};

const UpVoteList = memo<Props>(
  ({ upVotes, selected, onSelect, onAddUpVote }) => {
    return (
      <div className={styles.container}>
        <ul className={styles.upVoteList}>
          {Array.from({ length: upVotes }).map((_, index) => (
            <li key={index}>
              <UpVoteButton selected={selected} onClick={onSelect} />
            </li>
          ))}
        </ul>
        <PlusButton onClick={onAddUpVote} />
      </div>
    );
  }
);

UpVoteList.displayName = "UpVoteList";

export default UpVoteList;
