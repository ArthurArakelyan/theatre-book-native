import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ScrollView, StyleSheet, Text} from "react-native";

import Theatre from "../Theatre";

import {getTheatres} from "../../../store/theatres/actions";

const Theatres = () => {
  const dispatch = useDispatch();

  const {theatres, loading, error} = useSelector((state) => state.theatres);

  useEffect(() => {
    dispatch(getTheatres());
  }, []);

  if (loading) {
    return <Text style={styles.message}>loading...</Text>;
  }

  if (error) {
    return <Text style={styles.message}>Error</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.theatres}>
      {theatres.map((theatre) => {
        return (
          <Theatre key={theatre._id} theatre={theatre} />
        )
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  theatres: {
    paddingHorizontal: 15,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  message: {
    fontSize: 32,
  },
});

export default Theatres;
