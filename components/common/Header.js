// Utilisation:
//>
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View style={styles.header}>

        {/* <View style={styles.return}>
          <MaterialCommunityIconsIcon
            name="account"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
        </View> */}

        <View>
            <Image
                source={require("../../assets/Logo_Lug.png")}
                resizeMode="contain"
                style={styles.logoHeader}
            ></Image>
        </View>

        {/* <View style={styles.account}>
          <MaterialIconsIcon
            name="keyboard-return"
            style={styles.icon2}
          ></MaterialIconsIcon>
        </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#120841',
    flex: 1,
  },

  logoHeader: {
      width: 60,
      height: 60,
  },

});

export default Header;