import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import DatePicker from 'react-native-date-picker';
import Icon from "react-native-vector-icons/AntDesign";
import {TouchableRipple} from "react-native-paper";

import ModalFooter from "../ModalFooter";

import ModalHOC from "../../HOC/ModalHOC";

import {addTheatre} from "../../store/theatres/actions";

import checkImageURL from "../../utils/checkImageURL";

import global from "../../assets/global";

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

    if (!data.date) {
      return;
    }

    setLoading(true);

    const isValidUrl = await checkImageURL(data.image);

    if (!isValidUrl) {
      setLoading(false);
      return;
    }

    const date = new Date(data.date).toISOString();

    await dispatch(addTheatre(data.name, data.image, date));

    setData(initialData);
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
        style={[global.input, styles.input]}
        placeholderTextColor="#b0afaf"
        value={data.name}
        onChangeText={(value) => handleChange('name', value)}
        placeholder="Theatre name..."
        autoFocus
      />
      <TextInput
        style={[global.input, styles.input]}
        placeholderTextColor="#b0afaf"
        value={data.image}
        onChangeText={(value) => handleChange('image', value)}
        placeholder="Image URL..."
      />
      <TouchableRipple onPress={handleTogglePicker} style={styles.date}>
        <>
          <Icon name="calendar" size={28} style={styles.date_icon} />
          {data.date &&
            <Text style={styles.date_text}>
              {new Date(data.date).toLocaleString()}
            </Text>
          }
        </>
      </TouchableRipple>
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
      <ModalFooter
        onCancel={toggle}
        onSubmit={handleSubmit}
        loading={loading}
        submitText="Add"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  date: {
    width: '100%',
    backgroundColor: '#9308e7',
    marginTop: 10,
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  date_icon: {
    color: '#fff',
  },
  date_text: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },
});

export default ModalHOC(AddTheatreModal);
