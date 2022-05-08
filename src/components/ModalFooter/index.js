import React, {memo} from "react";
import {View, StyleSheet, ActivityIndicator, Text, Animated} from "react-native";
import {TouchableRipple} from "react-native-paper";

import useAnimation from "../../hooks/useAnimation";

const ModalFooter = ({onCancel, onSubmit, loading = false, submitText = 'Submit', cancelText = 'Cancel'}) => {
  const anim = useAnimation(0, {
    duration: 200,
    toValue: 1,
    delay: 300,
  });

  const positionAnim = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <View style={styles.modal_footer}>
      <Animated.View style={{left: positionAnim, opacity: anim}}>
        <TouchableRipple
          style={[styles.action, styles.action_cancel]}
          onPress={onCancel}
        >
          <Text style={styles.action_text}>
            {cancelText}
          </Text>
        </TouchableRipple>
      </Animated.View>
      <Animated.View style={{right: positionAnim, opacity: anim}}>
        <TouchableRipple
          style={[styles.action, styles.action_submit, loading && styles.action_loading]}
          onPress={onSubmit}
          disabled={loading}
        >
          {loading ?
            <ActivityIndicator color="#ffffff" size="small"/>
            :
            <Text style={styles.action_text}>{submitText}</Text>
          }
        </TouchableRipple>
      </Animated.View>
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
