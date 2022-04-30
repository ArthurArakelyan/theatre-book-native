import React, {useState} from "react";
import {TextInput} from "react-native";

import ModalFooter from "../../../../components/ModalFooter";

import ModalHOC from "../../../../HOC/ModalHOC";

import bookingsService from "../../../../services/bookingsService";

import global from "../../../../assets/global";

const BookingModal = ({toggle, theatre}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      return;
    }

    setLoading(true);

    bookingsService.bookTheatre(theatre._id, email)
      .finally(() => {
        setEmail('');
        setLoading(false);
        toggle();
      });
  };

  return (
    <>
      <TextInput
        style={global.input}
        placeholder="Email..."
        value={email}
        onChangeText={(value) => setEmail(value)}
        autoFocus
      />
      <ModalFooter
        onCancel={toggle}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </>
  );
};

export default ModalHOC(BookingModal);
