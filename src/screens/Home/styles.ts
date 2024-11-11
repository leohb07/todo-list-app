import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safaAreaViewContainer: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    gap: 4,
    marginTop: 32,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 54,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    color: "#F2F2F2",
  },
  buttonAdd: {
    backgroundColor: "#1E6F9F",
    height: 52,
    width: 52,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
  },
  progressContainer: {
    flexDirection: "row",
    paddingTop: 32,
    justifyContent: "space-between",
  },
  listEmptyContainer: {
    borderTopWidth: 1,
    borderTopColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 42,
  },
  textListEmpty: {
    color: "#808080",
    fontWeight: "bold",
    textAlign: "center",
  },
});
