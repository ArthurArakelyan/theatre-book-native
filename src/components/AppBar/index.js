import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button, StyleSheet, Text} from "react-native";
import {Appbar, Portal} from "react-native-paper";

import LoginModal from "./LoginModal";

import storage from "../../utils/storage";

import {login, logout} from "../../store/user/actions";

const AppBar = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector((state) => state.user);

  const handleToggleModal = () => {
    setIsModalOpen((value) => !value);
  };

  const handleLogout = () => {
    storage.remove('user')
      .then(() => dispatch(logout()));
  };

  useEffect(() => {
    dispatch(login());
  }, []);

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Theatre API" />
      {user ?
        <Text onLongPress={handleLogout} style={styles.user}>
          {user.name}
        </Text>
        :
        <>
          <Button title="Register" color="orange" onPress={handleToggleModal} />
          <LoginModal
            visible={isModalOpen}
            toggle={handleToggleModal}
          />
        </>
      }
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    color: '#ffffff',
    width: '40%',
    textAlign: 'right',
    fontSize: 18,
    marginRight: 10,
  },
});

export default AppBar;
