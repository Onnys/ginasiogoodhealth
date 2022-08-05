import * as React from "react";
import { TextInput } from "react-native-paper";
import { Text, View } from "react-native";
import { render } from "react-dom";
export function AddMenbers(props) {
  const [text, setText] = React.useState("");
  render (
    <View>
    <TextInput
      label={props.text}
      value={text}
      onChangeText={(text) => setText(text)}
    />
  </View>
);

//   return (
//     <View>
//       <TextInput
//         label={props.text}
//         value={text}
//         onChangeText={(text) => setText(text)}
//       />
//     </View>
//   );
}
