import { useLoadData } from "./useLoadData.js";
import { DataContext } from "../../context/DataContext";

export function DataProvider({ children }) {
    const data = useLoadData();
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}