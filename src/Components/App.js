import React from 'react';
import {Grid } from 'semantic-ui-react' ;
import './App.css';
import {connect} from 'react-redux' ;
import SidePanel from './SidePanel/SidePanel' ;
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel' ;

const App = ({currentUser , currentChannel , isPrivateChannel , userPosts}) => (

  <Grid columns="equal" className="app" style={{background: "#eee"}}>


   <SidePanel  key={currentUser && currentUser.uid} currentUser={currentUser}/>

<Grid.Column style={{ marginLeft: 320}}>
       <Messages  key={currentChannel && currentChannel.id} 
       currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
        />
       </Grid.Column>
       <Grid.Column width={4}>
       <MetaPanel
        key={currentChannel && currentChannel.name}
        userPosts={userPosts}
        currentChannel ={currentChannel}
        isPrivateChannel={isPrivateChannel}
        />
       </Grid.Column>
  
  </Grid>

)

//send info of currentuser 
const mapStateToProps =state =>({

  currentUser: state.user.currentUser ,
  currentChannel : state.channel.currentChannel ,
  isPrivateChannel : state.channel.isPrivateChannel ,
  userPosts : state.channel.userPosts

})

export default connect(mapStateToProps)(App);