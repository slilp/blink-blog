"use client";

import { useState } from "react";
import { FaLine } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { TbCopyCheck } from "react-icons/tb";

function LineButton() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="flex gap-2 items-center">
      <FaLine size={20} />
      <p>blinkkt</p>
      {isCopied ? (
        <TbCopyCheck size={15} />
      ) : (
        <IoCopyOutline
          className="cursor-pointer"
          size={15}
          onClick={() => {
            navigator.clipboard.writeText("blinkkt");
            setIsCopied(true);
          }}
        />
      )}
    </div>
  );
}

export default LineButton;
