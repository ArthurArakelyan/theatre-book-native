import React, {useState} from "react";
import {Button} from "react-native";

import LoginModal from "../LoginModal";

const AppBarRegister = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(value => !value);
  };

  return (
    <>
      <Button title="Register" color="orange" onPress={handleToggleModal} />
      <LoginModal
        visible={isModalOpen}
        toggle={handleToggleModal}
      />
    </>
  );
};

export default AppBarRegister;
