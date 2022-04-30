import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Text, StyleSheet} from "react-native";

import ModalFooter from "../../../../components/ModalFooter";

import ModalHOC from "../../../../HOC/ModalHOC";

import {deleteTheatre} from "../../../../store/theatres/actions";

const DeleteTheatreModal = ({toggle, theatre}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    dispatch(deleteTheatre(theatre._id)).finally(() => {
      setLoading(false);
      toggle();
    });
  };

  return (
    <>
      <Text style={styles.title}>
        Are you sure?
      </Text>
      <Text style={styles.sub_title}>
        You want to delete theatre
      </Text>
      <Text style={styles.name}>
        {theatre.name}
      </Text>
      <ModalFooter
        loading={loading}
        onCancel={toggle}
        onSubmit={handleSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 26,
    color: '#000',
  },
  sub_title: {
    textAlign: 'center',
    fontSize: 22,
    color: '#000',
    marginVertical: 10,
  },
  name: {
    fontFamily: 'njnaruto',
    fontSize: 20,
    color: 'orange',
  },
});

export default ModalHOC(DeleteTheatreModal, {width: '80%'});
