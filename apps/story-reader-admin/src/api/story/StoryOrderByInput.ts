import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
