import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {StyleSheet, Text, TextInput} from "react-native";

import ModalFooter from "../../ModalFooter";

import ModalHOC from "../../../HOC/ModalHOC";

import storage from "../../../utils/storage";
import generateId from "../../../utils/generateId";

import {login} from "../../../store/user/actions";

import global from "../../../assets/global";

const LoginModal = ({toggle}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      return;
    }

    storage.set('user', {
      id: generateId(),
      name,
    }).then(() => {
      dispatch(login());
      setName('');
      toggle();
    });
  };

  return (
    <>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={global.input}
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder="Name..."
        autoFocus
        onSubmitEditing={handleSubmit}
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
  actions: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2
  },
  close: {
    backgroundColor: "#ff0000",
  },
  submit: {
    marginLeft: 10,
    backgroundColor: "#6200EE",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default ModalHOC(LoginModal);
