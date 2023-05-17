import { WebList as TWebList } from "../api/webList/WebList";

export const WEBLIST_TITLE_FIELD = "name";

export const WebListTitle = (record: TWebList): string => {
  return record.name || String(record.id);
};
