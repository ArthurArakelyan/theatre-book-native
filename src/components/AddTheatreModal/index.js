import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Text, StyleSheet, View, TextInput, Pressable, ActivityIndicator} from "react-native";
import DatePicker from 'react-native-date-picker';

import ModalHOC from "../../HOC/ModalHOC";

import {addTheatre} from "../../store/theatres/actions";

import checkImageURL from "../../utils/checkImageURL";

const initialData = {
  name: '',
  image: '',
  date: null,
};

const AddTheatreModal = ({toggle}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleTogglePicker = () => {
    setIsDatePickerOpen((prevState) => !prevState);
  }

  const handleSubmit = async () => {
    if (loading) {
      return;
    }

    if (!data.name.trim() || !data.image.trim()) {
      return;
    }

    setLoading(true);

    const isValidUrl = await checkImageURL(data.image);

    if (!isValidUrl) {
      setLoading(false);
      return;
    }

    await dispatch(addTheatre(data.name, data.image));

    setData({
      name: '',
      image: '',
    });
    setLoading(false);
    toggle();
  };

  const handleChange = (name: string, value: string) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <TextInput
        style={styles.input}
        placeholderTextColor="#b0afaf"
        value={data.name}
        onChangeText={(value) => handleChange('name', value)}
        placeholder="Theatre name..."
        autoFocus
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#b0afaf"
        value={data.image}
        onChangeText={(value) => handleChange('image', value)}
        placeholder="Image URL..."
      />
      <Text onPress={handleTogglePicker} style={styles.date}>
        {data.date ?
          new Date(data.date).toLocaleString()
          :
          'Date...'
        }
      </Text>
      {/* todo: style date picker button */}
      <DatePicker
        open={isDatePickerOpen}
        modal
        date={data.date || new Date()}
        onCancel={handleTogglePicker}
        onConfirm={(date) => {
          handleChange('date', date);
          handleTogglePicker();
        }}
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
    height: 50,
    fontSize: 18,
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
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
