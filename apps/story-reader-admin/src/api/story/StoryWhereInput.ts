import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StoryWhereInput = {
  id?: StringFilter;
  name?: IntNullableFilter;
};
