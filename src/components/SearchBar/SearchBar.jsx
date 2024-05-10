import React from "react";
import SearchIcon from "../../assets/Icon/SearchIcon.png";

function SearchBar() {
    return (<div className="flex justify-between border border-gray-200 bg-white w-[95%] p-1 rounded-xl shadow-md mx-auto sm:w-[50%] sm:mx-0">
        <input type="text" name="searchBar" id="searchBar" placeholder="Search" className="placeholder:font-sans placeholder:font-semibold placeholder:text-[#5E5E5E]"/>
        <img src={SearchIcon} alt="SearchIcon" className="bg-Primary-red p-3 rounded-xl"/>
    </div>
    )
}

export default SearchBar;