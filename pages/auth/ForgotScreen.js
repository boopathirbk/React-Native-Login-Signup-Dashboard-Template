import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity, Image, ImageBackground, ScrollView, View } from 'react-native';
import { Container, Content, Form, Text, Button } from 'native-base';
export default class Login extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Container>
                        <ImageBackground source={require('../../assets/green.png')} style={{ width: '100%', height: '100%' }}>
                            <Content tyle={{ width: '80%', alignContent: 'center', alignSelf: 'center' }}>
                                <Form>
                                    <Input
                                        placeholder="E-mail ID"
                                        leftIcon={{ type: 'font-awesome', name: 'user-circle' }} />

                                    <Button
                                        rounded
                                        primary
                                        style={{
                                            justifyContent: "center",
                                            alignSelf: 'center',
                                            width: '40%',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingLeft: 40,
                                            paddingRight: 40,
                                            marginTop: 30,
                                            height: 40
                                        }} >
                                        <Text>Reset</Text>
                                        <Icon
                                            name="arrow-right"
                                            size={15}
                                            color="white"
                                        />
                                    </Button>


                                    <TouchableOpacity >
                                        <Text style={{
                                            color: '#000',
                                            opacity: .34,
                                            justifyContent: "center",
                                            alignSelf: 'center',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingLeft: 40,
                                            paddingRight: 40,
                                            marginTop: 10,
                                            height: 40
                                        }}>
                                            or</Text>
                                    </TouchableOpacity>

                                    <Button rounded info
                                     style={{
                                        justifyContent: "center",
                                        alignSelf: 'center',
                                        width: '40%',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingLeft: 40,
                                        paddingRight: 40,
                                        marginTop: 10,
                                        height: 40
                                    }}
                                    onPress={() => this.props.navigation.navigate('Signup')}>
                                        <Text>Signup</Text>
                                        <Icon
                                            name="arrow-right"
                                            size={15}
                                            color="white"
                                        />
                                    </Button>

                                </Form>
                            </Content>
                        </ImageBackground>
                    </Container>
                </ScrollView>
            </View>
        );
    }
}
