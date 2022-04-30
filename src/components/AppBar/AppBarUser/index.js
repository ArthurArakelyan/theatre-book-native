import React, {useEffect, useState} from "react";
import {Text, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";

import AdminCheckModal from "../../AdminCheckModal";

import {checkIsAdmin} from "../../../store/admin/actions";

import useModal from "../../../hooks/useModal";

const AppBarUser = ({user}) => {
  const dispatch = useDispatch();
  const navigator = useNavigation();

  const isAdmin = useSelector((state) => state.isAdmin);

  const [visible, toggle] = useModal(false);

  useEffect(() => {
    dispatch(checkIsAdmin());
  }, []);

  const redirectToAdmin = () => {
    navigator.navigate('admin');
  };

  const handleLongPress = () => {
    if (isAdmin) {
      redirectToAdmin();
    } else {
      toggle();
    }
  };

  return (
    <>
      <Text onLongPress={handleLongPress} style={styles.user}>
        {user.name}
      </Text>
      {!isAdmin && <AdminCheckModal
        visible={visible}
        toggle={toggle}
        redirectToAdmin={redirectToAdmin}
      />}
    </>
  );
};

const styles = StyleSheet.create({
  user: {
    color: '#ffffff',
    textAlign: 'right',
    fontSize: 18,
  },
});

export default AppBarUser;
