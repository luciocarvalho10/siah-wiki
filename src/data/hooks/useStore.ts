import { useContext } from "react";
import StoreContext from "@/data/context/StoreConext";

const useStore = () => useContext(StoreContext);

export default useStore;