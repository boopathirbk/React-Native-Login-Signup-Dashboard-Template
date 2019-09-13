import React, { Component } from 'react';
import SideBar from '../main/Sidebar';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
export default class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: undefined
      };
    }
    closeDrawer() {
      this._drawer._root.close()
    }
  
    openDrawer() {
      this._drawer._root.open()
    }
  
  render() {
    return (
      <Drawer
      ref={(ref) => { this._drawer = ref }}
      content={<SideBar navigator={this._navigator} />}
      onClose={() => this.closeDrawer()}
    >         
      <Container>    
        <Header>  
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body style={{alignItems:'center',alignSelf:'center'}}>
            <Title>Dashboard</Title>
          </Body>
        </Header>
      </Container>
      </Drawer>
    );
  }
}