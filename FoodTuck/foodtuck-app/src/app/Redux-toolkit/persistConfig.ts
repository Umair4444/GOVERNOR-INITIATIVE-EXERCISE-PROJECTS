import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Prevents SSR issues by using a noop storage when `window` is undefined
const createNoopStorage = () => ({
  getItem: async () => null,
  setItem: async (_key: string, value: any) => value,
  removeItem: async () => {},
});

// Use localStorage only on the client-side
const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

export default persistConfig;
