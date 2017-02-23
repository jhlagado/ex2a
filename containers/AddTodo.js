import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/Todo/actions'
import {
  View,
  Button,
} from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

const someFunction = (text) => {
  // if (!text.trim()) {
  //   return
  // }
  // dispatch(addTodo(input.value))
  // input.value = ''
}

const AddTodo = ({ dispatch }) => {

  let input = 'Hi!';
  let textInput = null;
  let formInput = null;
  console.log('LOADING====>' );

  const add = () => {
    if (input && input.trim()) {
      console.log('SUBMIT INPUT====>' + input);
      dispatch(addTodo(input.value))
      input = ''
    }  
  }

  return (
    <View>
      <FormLabel>Name</FormLabel>
      <FormInput  textInputRef="textInput" onChangeText={(text) => {
        console.log('TEXT INPUT====>' + text);
       // input = text;
       // console.log('formInput', Object.keys(formInput));
      }
      } />
      <Button title="Add" onPress={add}></Button>
    </View>
  )
}
// ref={(ref) => formInput = ref}

AddTodo = connect()(AddTodo)

export default AddTodo




      /*
      <FormValidationMessage>Error message</FormValidationMessage>
      
      
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="addtodo" ref={node => {
            input = node
          }} />
          <label className="mdl-textfield__label" htmlFor="addtodo">Enter the task to do...</label>
        </div>

        
        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Add Todo
        </button>
      </form>
    </div>
    
    */
