import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TextInput} from "react-native";

import ModalFooter from "../../../../components/ModalFooter";

import ModalHOC from "../../../../HOC/ModalHOC";

import bookingsService from "../../../../services/bookingsService";

import {addEmail} from "../../../../store/user/actions";

import global from "../../../../assets/global";

const BookingModal = ({toggle, theatre}) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      return;
    }

    setLoading(true);

    dispatch(addEmail(email));

    bookingsService.bookTheatre(theatre._id, email)
      .then(() => {
        setEmail('');
        toggle();
      })
      .finally(() => {
        setLoading(false);
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
