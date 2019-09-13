
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity, Image, ImageBackground, ScrollView, View } from 'react-native';
import { Container, Content, Form, Text, Button, Picker, Header,Left, Right, Body, Title } from 'native-base';
export default class Login extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value=key0) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Header>
            <Left>
              <Button hasText transparent>
                <Text>Back</Text>
              </Button>
            </Left>
            <Body style={{alignContent:'center'}}>
              <Title>Profile</Title>
            </Body>
            <Right>
            <Button rounded primary  
                      onPress={() => this.props.navigation.navigate('Dashboard')}>
                      <Text>Next</Text>
                      <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                      />
                    </Button>
            </Right>
            </Header>
            <Container>
              <ImageBackground source={require('../../assets/green.png')} style={{ width: '100%', height: '100%' }}>
                <Content tyle={{ width: '80%', alignContent: 'center', alignSelf: 'center' }}>
                  <Form>
                    <Input
                      placeholder="Name"
                      leftIcon={{ type: 'font-awesome', name: 'user-circle-o' }} />

                    <Input
                      placeholder='Roll No'
                      leftIcon={{ type: 'font-awesome', name: 'pencil' }} />
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      placeholder="Select Branch"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      style={{ width: '60%', alignItems: 'center', alignSelf: 'center' }}
                      selectedValue={this.state.selected}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                      <Picker.Item label="Select your Department" value="key0" />
                      <Picker.Item label="CSE" value="key1" />
                      <Picker.Item label="IT" value="key2" />
                      <Picker.Item label="ME" value="key3" />
                      <Picker.Item label="ECE" value="key4" />
                    </Picker>
                    
                  </Form>
                </Content>
              </ImageBackground>
            </Container>
          
        </ScrollView>
      </View>
    );
  }
}
