import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";

import ModalHOC from "../../../HOC/ModalHOC";

import storage from "../../../utils/storage";
import generateId from "../../../utils/generateId";

import {login} from "../../../store/user/actions";

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
      toggle();
    });
  };

  return (
    <>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder="Name..."
        autoFocus
        onSubmitEditing={handleSubmit}
      />
      <View style={styles.actions}>
        <Pressable
          style={[styles.button, styles.close]}
          onPress={toggle}
        >
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.submit]}
          onPress={handleSubmit}
        >
          <Text style={styles.textStyle}>OK</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontSize: 28,
    color: '#000000',
  },
  input: {
    fontSize: 18,
    color: '#000000',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
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
