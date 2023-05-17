import { WebListWhereInput } from "./WebListWhereInput";
import { WebListOrderByInput } from "./WebListOrderByInput";

export type WebListFindManyArgs = {
  where?: WebListWhereInput;
  orderBy?: Array<WebListOrderByInput>;
  skip?: number;
  take?: number;
};
