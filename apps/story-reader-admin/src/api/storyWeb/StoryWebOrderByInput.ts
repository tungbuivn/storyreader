import { SortOrder } from "../../util/SortOrder";

export type StoryWebOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  status?: SortOrder;
  storyId?: SortOrder;
  updatedAt?: SortOrder;
  webId?: SortOrder;
};
