import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import AppBarUser from "./AppBarUser";
import AppBarRegister from "./AppBarRegister";

import {login} from "../../../store/user/actions";

const AppBarRight = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(login()).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return null;
  }

  if (user) {
    return <AppBarUser user={user} />;
  }

  return <AppBarRegister />;
}

export default AppBarRight;
