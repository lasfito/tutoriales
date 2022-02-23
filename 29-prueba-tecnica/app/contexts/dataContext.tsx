import React, {createContext, useState, useEffect} from 'react';
import fileDate from "~/data";

export const DataContext = createContext<any>(undefined);

export function DataContextProvider (props :any) {
    const [globalData, setGlobalData] = useState(fileDate);


useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('localMovies') || '[]');
    if (localMovies?.length > 0) {
        setGlobalData(localMovies);
    }
}, []);


    const value = {globalData, setGlobalData};



return (
    <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
)

}


export function useGlobalData() {
    const context = React.useContext(DataContext);
    if (context === undefined) {
        throw new Error(`useGlobalData must be used within a DataContextProvider`);
    }
    return context;
}