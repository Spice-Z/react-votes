import { useAtom } from "jotai";
import { atomWithLocalStorage } from "./helpers";
import { useCallback } from "react";
import { UP_VOTE_LIST_LOCAL_STORAGE_KEY } from "./constants";

type UpVoteList = {
  upVotes: number;
  selected: boolean;
}[];

const initialUpVoteList: UpVoteList = [
  {
    upVotes: 0,
    selected: false,
  },
  {
    upVotes: 0,
    selected: false,
  },
  {
    upVotes: 0,
    selected: false,
  },
];

const upVoteListAtom = atomWithLocalStorage<UpVoteList>(
  UP_VOTE_LIST_LOCAL_STORAGE_KEY,
  initialUpVoteList
);

export const useUpVoteList = () => {
  const [upVoteList, setUpVoteList] = useAtom(upVoteListAtom);

  const handleSelect = useCallback(
    (index: number) => {
      const newUpVoteList = upVoteList.map((upVote, i) =>
        i === index
          ? {
              ...upVote,
              selected: !upVote.selected,
            }
          : upVote
      );
      setUpVoteList(newUpVoteList);
    },
    [upVoteList, setUpVoteList]
  );

  const handleAddUpVote = useCallback(
    (index: number) => {
      const newUpVoteList = upVoteList.map((upVote, i) =>
        i === index
          ? {
              ...upVote,
              upVotes: upVote.upVotes + 1,
            }
          : upVote
      );
      setUpVoteList(newUpVoteList);
    },
    [upVoteList, setUpVoteList]
  );

  const handleAddList = useCallback(() => {
    const newUpVoteList = [...upVoteList, { upVotes: 0, selected: false }];
    setUpVoteList(newUpVoteList);
  }, [setUpVoteList, upVoteList]);

  const resetAll = useCallback(() => {
    setUpVoteList([]);
  }, [setUpVoteList]);

  return { upVoteList, handleAddList, resetAll, handleSelect, handleAddUpVote };
};
