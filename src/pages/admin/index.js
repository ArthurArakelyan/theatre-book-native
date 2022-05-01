import React, {useState, useMemo, useEffect} from "react";
import {useSelector} from "react-redux";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TouchableRipple} from "react-native-paper";

import Theatres from "./Theatres";
import Bookings from "./Bookings";

const Stack = createNativeStackNavigator();

const Admin = ({navigation}) => {
  const [tab, setTab] = useState('theatres');

  const {loading: theatresLoading} = useSelector((state) => state.theatres);
  const {loading: bookingsLoading} = useSelector((state) => state.bookings);
  const isAdmin = useSelector((state) => state.isAdmin);

  const loading = useMemo(() => theatresLoading || bookingsLoading, [theatresLoading, bookingsLoading]);

  const handleTab = (name: string) => {
    if (tab === name) {
      return;
    }

    navigation.push(`admin/${name}`);
    setTab(name);
  };

  useEffect(() => {
    if (!isAdmin) {
      navigation.pop();
    }
  }, [isAdmin]);

  return (
    <View style={styles.admin}>
      <View style={styles.admin_tabs}>
        <TouchableRipple style={styles.admin_tab} onPress={() => handleTab('theatres')}>
          <Text style={[styles.admin_tab_text, tab === 'theatres' && styles.admin_tab_text_active]}>
            Theatres
          </Text>
        </TouchableRipple>
        <TouchableRipple style={styles.admin_tab} onPress={() => handleTab('bookings')}>
          <Text style={[styles.admin_tab_text, tab === 'bookings' && styles.admin_tab_text_active]}>
            Bookings
          </Text>
        </TouchableRipple>

        {loading &&
          <ActivityIndicator style={styles.admin_tab_loader} color="orange" size={24} />
        }
      </View>

      <Stack.Navigator
        initialRouteName="admin/theatres"
        screenOptions={{
          header: () => null,
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen name="admin/theatres" component={Theatres} />
        <Stack.Screen name="admin/bookings" component={Bookings} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  admin: {
    height: '100%',
    paddingVertical: 10,
  },
  admin_tabs: {
    position: "relative",
    alignItems: "center",
    flexDirection: 'row',
    marginBottom: 10,
  },
  admin_tab: {
    marginLeft: 20,
  },
  admin_tab_text: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'njnaruto',
  },
  admin_tab_text_active: {
    color: 'orange',
  },
  admin_tab_loader: {
    position: "absolute",
    right: 20,
  },
});

export default Admin;
