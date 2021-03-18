import React, {Component} from 'react'
import {View, Button, TextInput} from 'react-native'
export default class Screen1 extends Component{
    constructor(props) {
        super(props);
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
                  
                   onChangeText={username=>this.setState({username})}>

                   </TextInput>
<TextInput placeholder="enter your password" onChangeText={username=>this.setstate({username})}>
    </TextInput>
                   <Button title="Enter"
                   onPress={()=>this.props.navigation.navigate('Screen2', {Parameter1:this.state.username})}>

                   </Button>
            </view>
        }
    }
}
