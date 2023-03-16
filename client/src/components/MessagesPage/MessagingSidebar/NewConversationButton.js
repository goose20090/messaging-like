import React from "react";

function NewConversationButton(){
    return(
        <div className="absolute bottom-0 right-0 mr-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-sm">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>
    )
}

export default NewConversationButton;