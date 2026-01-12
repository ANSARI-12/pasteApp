import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  // display item you view
  const { id } = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log("final paste: ", paste);
  // -----
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-xl mt-2 w-[60%] pl-5 border"
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button onClick={createMyPaste} className="p-2 rounded-xl mt-2">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>

      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-125 p-4 border"
          value={paste.content}
          placeholder="Enter Content here"
          onChange={(e) => setValue(e.target.value)}
          rows={15}
          disabled
        />
      </div>
    </div>
  );
};

export default ViewPaste;
