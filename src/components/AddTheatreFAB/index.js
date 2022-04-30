import React, {memo} from "react";
import {useSelector} from "react-redux";

import FloatingActionButton from "../FloatingActionButton";
import AddTheatreModal from "../AddTheatreModal";

import useModal from "../../hooks/useModal";

const AddTheatreFAB = () => {
  const [visible, toggle] = useModal();

  const isAdmin = useSelector((state) => state.isAdmin);

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <FloatingActionButton handleClick={toggle} />
      <AddTheatreModal visible={visible} toggle={toggle} />
    </>
  );
};

export default memo(AddTheatreFAB);
