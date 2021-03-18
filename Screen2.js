import React, {Component, component} from 'react'
import{ View, Text} from 'react-native'
export default class Screen1 extends Component{
    render()
    {
        return(
            <View style={{flex:1, justifyContent:'center', padding:15}}>
                <Text style={{fontSize:15}}>
                your username is {this.props.navigation.this.state.params.Parameter1}
                </Text>
            </View>
        )
    }
}