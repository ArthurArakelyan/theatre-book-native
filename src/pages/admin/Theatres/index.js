import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ScrollView, StyleSheet} from "react-native";

import PageError from "../../../components/PageError";
import Theatre from "./Theatre";
import DeleteTheatreModal from "./DeleteTheatreModal";

import useModal from "../../../hooks/useModal";

import {getTheatres} from "../../../store/theatres/actions";

const Theatres = () => {
  const dispatch = useDispatch();

  const {theatres, error} = useSelector((state) => state.theatres);

  const [deleteTheatre, setDeleteTheatre] = useState(null);
  const [deleteVisible, deleteToggle] = useModal();

  useEffect(() => {
    dispatch(getTheatres());
  }, []);

  if (error) {
    return <PageError handleClick={() => dispatch(getTheatres())} />;
  }

  const handleDelete = (id: string) => {
    setDeleteTheatre(id);
    deleteToggle();
  };

  return (
    <ScrollView contentContainerStyle={styles.theatres}>
      {theatres.map((theatre) => {
        return (
          <Theatre
            key={theatre._id}
            theatre={theatre}
            handleDelete={handleDelete}
          />
        );
      })}
      <DeleteTheatreModal
        visible={deleteVisible}
        toggle={deleteToggle}
        theatre={deleteTheatre}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  theatres: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default Theatres;
