import React, {memo} from "react";
import {View, StyleSheet, ActivityIndicator, Text} from "react-native";
import {TouchableRipple} from "react-native-paper";

const ModalFooter = ({onCancel, onSubmit, loading = false, submitText = 'Submit', cancelText = 'Cancel'}) => {
  return (
    <View style={styles.modal_footer}>
      <TouchableRipple
        style={[styles.action, styles.action_cancel]}
        onPress={onCancel}
      >
        <Text style={styles.action_text}>
          {cancelText}
        </Text>
      </TouchableRipple>
      <TouchableRipple
        style={[styles.action, styles.action_submit, loading && styles.action_loading]}
        onPress={onSubmit}
        disabled={loading}
      >
        {loading ?
          <ActivityIndicator color="#ffffff" size="small" />
          :
          <Text style={styles.action_text}>{submitText}</Text>
        }
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  modal_footer: {
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
  action_text: {
    color: '#ffffff',
    fontSize: 16,
  },
  action_loading: {
    opacity: 0.8,
  },
  action_submit: {
    backgroundColor: '#6200EE',
  },
  action_cancel: {
    backgroundColor: '#ff0000',
    marginRight: 10,
  },
});

export default memo(ModalFooter);
