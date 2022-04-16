import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {ActivityIndicator} from "react-native";

import Theatre from "../Theatre";

import {getTheatres} from "../../../store/theatres/actions";

const Theatres = () => {
  const dispatch = useDispatch();

  const {theatres, loading, error} = useSelector((state) => state.theatres);

  useEffect(() => {
    dispatch(getTheatres());
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={80} color="#6200EE" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>Error</Text>
      </View>
    );
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
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60%',
  },
  message: {
    fontSize: 32,
    color: '#000000',
  },
});

export default Theatres;
