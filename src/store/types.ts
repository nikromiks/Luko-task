import { IInventoryItem } from "../network/types";

export type TCreateInventoryItem = Omit<IInventoryItem, "id" | "type">;
