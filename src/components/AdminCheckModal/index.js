import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Text, StyleSheet, TextInput} from "react-native";

import ModalHOC from "../../HOC/ModalHOC";
import ModalFooter from "../ModalFooter";

import {setIsAdmin} from "../../store/admin/actions";

import {ADMIN_PASSWORD} from "../../config";

import global from "../../assets/global";

const AdminCheckModal = ({toggle, redirectToAdmin}) => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    if (password !== ADMIN_PASSWORD) {
      setIsError(true);
      return;
    }

    setIsError(false);
    dispatch(setIsAdmin()).then(() => {
      toggle();
      redirectToAdmin();
    });
  };

  return (
    <>
      <Text style={styles.title}>Are you Admin?</Text>
      <TextInput
        style={[global.input, isError && global.input_error]}
        placeholder="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        autoFocus
      />
      <ModalFooter
        onCancel={toggle}
        onSubmit={handleSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontSize: 28,
    color: '#000000',
  },
});

export default ModalHOC(AdminCheckModal);
