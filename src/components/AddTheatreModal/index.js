import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Text, StyleSheet, View, TextInput, Pressable, ActivityIndicator} from "react-native";

import ModalHOC from "../../HOC/ModalHOC";

import {addTheatre} from "../../store/theatres/actions";

const AddTheatreModal = ({toggle}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (loading) {
      return;
    }

    if (!name.trim()) {
      return;
    }

    setLoading(true);

    dispatch(addTheatre(name, 'https://px-to-vw.vercel.app/favicon.ico')).then(() => {
      setName('');
      setLoading(false);
      toggle();
    });
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder="Theatre name..."
        autoFocus
      />
      <View style={styles.actions}>
        <Pressable style={[styles.action, styles.action_close]} onPress={toggle}>
          <Text style={styles.action_text}>Close</Text>
        </Pressable>
        <Pressable
          disabled={loading}
          style={[styles.action, styles.action_submit, loading && styles.action_loading]}
          onPress={handleSubmit}
        >
          {loading ?
            <ActivityIndicator color="#ffffff" size="small" />
            :
            <Text style={styles.action_text}>Add</Text>
          }
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 18,
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  actions: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 20,
  },
  action: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  action_loading: {
    opacity: 0.8,
  },
  action_text: {
    color: '#ffffff',
    fontSize: 16,
  },
  action_close: {
    backgroundColor: '#ff0000',
    marginRight: 10,
  },
  action_submit: {
    backgroundColor: '#6200EE',
  },
});

export default ModalHOC(AddTheatreModal);
