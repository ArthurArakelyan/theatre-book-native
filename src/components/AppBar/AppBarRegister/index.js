import React, {useState} from "react";
import {Button, Animated} from "react-native";

import LoginModal from "../LoginModal";

import useAnimation from "../../../hooks/useAnimation";

const AppBarRegister = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const anim = useAnimation(400, {
    toValue: 0,
    duration: 500,
  });

  const handleToggleModal = () => {
    setIsModalOpen(value => !value);
  };

  return (
    <Animated.View style={{ left: anim }}>
      <Button title="Register" color="orange" onPress={handleToggleModal} />
      <LoginModal
        visible={isModalOpen}
        toggle={handleToggleModal}
      />
    </Animated.View>
  );
};

export default AppBarRegister;
