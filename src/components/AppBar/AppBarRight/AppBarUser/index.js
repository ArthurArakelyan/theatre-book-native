import React, {useEffect} from "react";
import {StyleSheet, Animated} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";

import AdminCheckModal from "../../../AdminCheckModal";

import {checkIsAdmin} from "../../../../store/admin/actions";

import useModal from "../../../../hooks/useModal";
import useAnimation from "../../../../hooks/useAnimation";

const AppBarUser = ({user}) => {
  const dispatch = useDispatch();
  const navigator = useNavigation();

  const isAdmin = useSelector((state) => state.isAdmin);

  const [visible, toggle] = useModal(false);

  const anim = useAnimation(400, {
    toValue: 0,
    duration: 500,
  });

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
      <Animated.Text
        onLongPress={handleLongPress}
        style={{
          ...styles.user,
          left: anim,
        }}
      >
        {user.name}
      </Animated.Text>
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
