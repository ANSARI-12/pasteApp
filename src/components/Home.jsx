import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    console.log("inside use effect");
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      console.log("Page Found");
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createMyPaste() {
    const paste = {
      title: title,
      content: value,
      _id:
        pasteId ||
        Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      // create
      dispatch(addToPastes(paste));
    }
    // after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-xl mt-2 w-[60%] pl-5 border"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createMyPaste} className="p-2 rounded-xl mt-2">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-125 p-4 border"
          value={value}
          placeholder="Enter Content here"
          onChange={(e) => setValue(e.target.value)}
          rows={15}
        />
      </div>
    </div>
  );
};

export default Home;
