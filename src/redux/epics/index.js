import { combineEpics } from "redux-observable";

import mapEpic from "./MapEpic";

const epics = combineEpics(
  ...mapEpic,
);

export default epics;