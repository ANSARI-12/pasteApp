import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  // console.log(pastes);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  const handleShare = async (paste) => {
    const shareData = {
      title: paste?.title || "Check this out!",
      text: paste?.content,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success("Shared successfully!");
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error("Failed to share content.");
          console.error("Sharing error:", error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        toast.success("Share not supported. Link copied to clipboard!");
      } catch (err) {
        toast.error("Could not copy link.");
      }
    }
  };

  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-150 mt-5"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border" key={paste?._id}>
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button>
                    <NavLink to={`/?pasteId=${paste?._id}`}>Edit</NavLink>
                  </button>
                  <button>
                    <NavLink to={`/pastes/${paste?._id}`}>View</NavLink>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button // Source - https://stackoverflow.com/a
                    // Posted by Gary Vernon Grubb, modified by community. See post 'Timeline' for change history
                    // Retrieved 2026-01-11, License - CC BY-SA 4.0

                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button onClick={handleShare}>Share</button>
                </div>
                {/* not correct form of date */}
                {/* <div>{paste.createdAt}</div> */}
                <div>
                  {new Date(paste.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
