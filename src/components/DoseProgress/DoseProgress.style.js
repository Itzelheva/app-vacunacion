import { StyleSheet } from "react-native"

const doseCommon = {
  width: 50, 
  height: 50,
  borderRadius: 10,
  margin: 5
};

const styles = StyleSheet.create({
  doseApplied: {
    ...doseCommon,
    backgroundColor: '#98FB98'
  },
  dosePending: {
   ...doseCommon,
   backgroundColor: '#DCDCDC' 
  },
})

export default styles;