import React, { createContext, useState, useEffect } from "react";

export const TabContext = createContext()

function TabContextProvider(props) {

    const [dropdownTab, setDropdownTab] = useState(1)
    
    function updateDropdownTab(tab) {
        setDropdownTab(tab)
    }


    useEffect(() => {
        localStorage.setItem("dropdownTabLocal", JSON.stringify(dropdownTab));
      }, [dropdownTab]);

    const value = { dropdownTab, updateDropdownTab }

    return (
        <TabContext.Provider value={value}>
            {props.children}
        </TabContext.Provider>
    )
}


export default TabContextProvider;