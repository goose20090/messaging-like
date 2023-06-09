/** @format */

import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import SidebarTitle from "./SidebarTitle";


function Search({ user, unreadCount, search, handleSearchChange }) {
  const [searching, setSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(e) {
    setSearching(true);
  }

  function handleBlur(e) {
    setIsFocused(false);
    setSearching(false);
  }

  useEffect(() => {
    setIsFocused(true);
  }, [searching]);

  return (
    <div className="flex justify-start border-b border-indigo-600 pb-2 h-min-20 ">
      {searching ? null : (
       <SidebarTitle user = {user} unreadCount = {unreadCount}/>
      )}
      <SearchInput handleBlur={handleBlur} handleFocus = {handleFocus} isFocused = {isFocused} search= {search} handleSearchChange ={handleSearchChange}/>
    </div>
  );
}

export default Search;
