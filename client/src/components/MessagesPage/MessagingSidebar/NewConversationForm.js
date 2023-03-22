/** @format */

import { useState } from "react";

function NewConversationForm({ allUsers, handleAddConv }) {
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(allUsers);
  const [filterText, setFilterText] = useState("");
  const [newConvoUsers, setNewConvoUsers] = useState([]);
  const [newUserAdded, setNewUserAdded] = useState(false)

  function onClick(){
    handleAddConv(newConvoUsers)
  }


  const filteredOptions = options.filter((option) =>
    option.username.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterInputChange = (event) => {
    setFilterText(event.target.value);
    setShowOptions(true);
  };

  function handleOptionClick(e) {
    setShowOptions(false);
    setFilterText("");
    let newUser = allUsers.find(
      (user) => user.username === e.target.textContent
    );
    setNewConvoUsers([...newConvoUsers, newUser]);

    const newOptions = options.filter((user)=> user.id !== newUser.id)

    setOptions(newOptions)
    setNewUserAdded(true)
  }

  function handleBlur() {
    setShowOptions(false)
  }

  function handleNewConvoUserDelete(e){

    const deletedUserId = e.target.id

    const filteredConvoUsers = newConvoUsers.filter((user)=> user.id != deletedUserId)

    const filteredUser = allUsers.find((user)=> user.id == deletedUserId)

    setNewConvoUsers(filteredConvoUsers)

    setOptions([...options, filteredUser])
  }


  function handleOptionClick(e) {
    document.getElementById('search-input').blur()
    setShowOptions(false);
    setFilterText("");
    let newUser = allUsers.find(
      (user) => user.username === e.target.textContent
    );
    setNewConvoUsers([...newConvoUsers, newUser]);

    const newOptions = options.filter((user)=> user.id !== newUser.id)

    setOptions(newOptions)
  }


  return (
    <div className="relative ml-auto mr-auto w-10/12 rounded border bg-white p-2">
      <div>
        <h4>Start a new conversation with:</h4>
        {newConvoUsers.map((user) => (
          <p
            key={user.id}
            className="m-1 rounded bg-indigo-500 px-4 font-bold text-white hover:bg-indigo-700"
          >
            {user.username}
            <span id = {user.id} onClick = {handleNewConvoUserDelete} className="float-right cursor-pointer">X</span>
          </p>
        ))}
      </div>
      <input
        id = "search-input"
        type="text"
        placeholder="Search.."
        className="w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        value={filterText}
        onChange={handleFilterInputChange}
        onFocus={() => setShowOptions(true)}
        onBlur={handleBlur}
      />
      {showOptions && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          {filteredOptions.map((option) => (
            <p
              key={option.id}
              href={option.href}
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
              onClick={handleOptionClick}
              onMouseDown = {(e)=> e.preventDefault()}
            >
              {option.username}
            </p>
          ))}
        </div>
      )}
      <button onClick = {onClick} className="mt-2 rounded-full bg-indigo-500 py-1 px-4 font-bold text-white hover:bg-indigo-700">
        Start Conversation
      </button>
    </div>
  );
}

export default NewConversationForm;
