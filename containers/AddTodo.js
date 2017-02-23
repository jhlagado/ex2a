import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/Todo/actions'
import {
  View,
  Button,
  TextInput,
} from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

class AddTodo extends React.Component {

  state: null;

  constructor(props) {
    super(props);
    this.state = { text: '' }; 
  }

  render() {
    return (
      <View>
        <FormLabel>Add a todo item </FormLabel>
        <FormInput
          multiline={false}
          onChangeText={(text) => {
            this.setState({ text });
          }}
          onSubmitEditing={(event) => {
            console.log('onSubmitEditing text: ', event.nativeEvent.text, Object.keys(this.props));
            var text = this.state.text;
            if (text && text.trim()) {
              console.log('SUBMIT INPUT====>' + text);
              this.props.dispatch(addTodo(text))
              this.setState({ text: ''});
            }
          }}
          value={this.state.text}
        />
      </View>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
