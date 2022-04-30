import {useState} from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(value => !value);

  return [isOpen, toggle, setIsOpen];
};

export default useModal;
