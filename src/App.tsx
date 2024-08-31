import UpVoteList from "./feature/vote/UpVoteList";
import styles from "./App.module.css";
import { useUpVoteList } from "./feature/storage/useUpVoteListAtom";

function App() {
  const { upVoteList, resetAll, handleAddList, handleSelect, handleAddUpVote } =
    useUpVoteList();
  return (
    <div className={styles.container}>
      {upVoteList.map((upVote, index) => (
        <UpVoteList
          key={index}
          upVotes={upVote.upVotes}
          selected={upVote.selected}
          onSelect={() => handleSelect(index)}
          onAddUpVote={() => handleAddUpVote(index)}
        />
      ))}
      {/* For debug purpose */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button style={{ width: "100px" }} onClick={handleAddList}>
          Add List
        </button>
        <button style={{ width: "100px" }} onClick={resetAll}>
          Reset All
        </button>
      </div>
    </div>
  );
}

export default App;
