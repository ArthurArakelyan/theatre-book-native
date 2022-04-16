import React, {Component} from "react";
import {Modal, StyleSheet, View} from "react-native";

const ModalHOC = (Content: Component, contentStyles) => ({visible, toggle}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={toggle}
    >
      <View style={styles.centeredView}>
        <View style={contentStyles ? {...styles.modalView, ...contentStyles} : styles.modalView}>
          <Content toggle={toggle} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    width: '70%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default ModalHOC;
