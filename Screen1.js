import React, {Component} from 'react'
import {View, Button, TextInput} from 'react'
export default class Screen extends Component{
    constructor(props) {
        super(props)
            this.state={
                username:''
        };
        
    }
    render()
    {
        return
        {
            <view >
                <TextInput placeholder="Enter your Username"
                  
                   onChangeText={username=>this.setState(username)}>

                   </TextInput>

                   <Button title="Enter"
                   onPress={()=>this.props.navigate('Screen2', {Parameter1:this.state.username})}>

                   </Button>
            </view>
        }
    }
}