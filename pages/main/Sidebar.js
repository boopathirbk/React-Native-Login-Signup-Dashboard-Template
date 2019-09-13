import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Drawer, Content, Button, Icon, Body, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class Sidebar extends React.Component {


    render() {
        return (
            <Container style={{ backgroundColor: '#ffff' }}>
                <Content>
                    <Body>
                        <Text>Hii</Text>
                    </Body>
                </Content>
            </Container>
        )
    };
}
