import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  sideMenuContainer: {
    marginTop: -15,
    padding: 0,
    margin: 0,
    flex: 1,
  },
  _profile_Section: {
    height: 150,
    borderBottomRightRadius: 50
  },
  _drawer_profile: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2
  },
  _drawer_profile_main: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 70
  },
  _profile_first_l: {
    fontWeight: "bold",
    fontSize: 20
  },
  _user_name: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  _services_btn: {
    width: "90%",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  _services_btn_gradient: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  _services_btn_text: {
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.5
  },
  _version: {
    textAlign: "center",
    marginTop: 150,
    fontSize: 18
  }
});

export default styles;