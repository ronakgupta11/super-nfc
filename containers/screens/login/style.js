const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    alignItems: "center",
    backgroundColor:"white",
    height:"100%",
    justifyContent:"center"
  },
  loginScreenContainer: {
    flex: 1,
    backgroundColor:"white"
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
    color:"black",
  },
});
export default styles;
