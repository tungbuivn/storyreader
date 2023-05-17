import { StoryWebWhereInput } from "./StoryWebWhereInput";
import { StoryWebOrderByInput } from "./StoryWebOrderByInput";

export type StoryWebFindManyArgs = {
  where?: StoryWebWhereInput;
  orderBy?: Array<StoryWebOrderByInput>;
  skip?: number;
  take?: number;
};
