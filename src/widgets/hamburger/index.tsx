import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Hamburger = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={`h-screen w-screen top-0 justify-center items-center fixed bg-white ${
        isOpen ? "flex" : "hidden"
      }`}
      onClick={() => setIsOpen(false)}
    >
     
          <ul className="gap-y-10 grid">
            <li>
              <a href="/home" className="text-black py-2">
                Home
              </a>
            </li>
            <li>
              <a href="/how-to" className="text-black py-2">
                How to
              </a>
            </li>
            <li>
              <a href="/guides" className="text-black py-2">
                Guides
              </a>
            </li>
          </ul>
      
    </div>
  );
};
