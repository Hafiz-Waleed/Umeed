import React from 'react';
import { StyleSheet,Text, View, Image,ImageBackground,Card} from 'react-native';
import {Ionicons,Entypo} from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native'
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import Settingspeaker from './Settingspeaker';
import deleteVideos from './deleteVideos';
// import patientHome from './patientHome';
import {Header, Left, Right, Icon } from 'native-base';
import uploadVideos from './uploadVideos';
import viewEarning from './viewEarning';
import viewFeedbackvideos from './viewFeedbackvideos';
import { TouchableOpacity } from 'react-native-gesture-handler';

class speakerDashboard extends React.Component {
  
  // static navigationOptions = {

  //   headerLeft:null,
  //   headerTitle: <Icon name="menu"
  //   //  onPress ={()=>this.props.navigation.openDrawer()
  //   // onPress = {() => navigation.openDrawer()}
  //   />,
  //  title: 'Welcome',
  //   headerStyle: {
  //     backgroundColor: '#3498db',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // }
  // constructor() {
  //   super();
  //   this.state = {
  //    username:'',
  //    imageURL: ''
  //   }
  // }
  render() {

    const personInffo = this.props.navigation.getParam('personInfo')
    return (
      <View>
      <ImageBackground source={require('./../images/background9.jpg')} style={{ width:360, height:230,marginTop:0}}>
  <View style={{flexDirection:'row'}}>
  <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                <Ionicons style={styles.icon} name='md-menu'></Ionicons>
            </TouchableOpacity>
  <Text style={{color:'black', fontSize:20,marginVertical:1,marginLeft:60,fontWeight:'bold'}}>Speaker Dashboard</Text>
  <Entypo style={{marginLeft:65,color:'red',fontSize:22,marginVertical:1} } name='log-out' ></Entypo>
  </View>
  <Text style={{color:'black', fontSize:16,textAlign:'right'}}onPress={() => this.props.navigation.navigate('Login')}>logout</Text>
  
  
         <Image source={require('./../images/a3.jpg')}style={{ width:88, height:88, marginLeft: 30, marginTop: 10,borderRadius:99}} ></Image>
  <Text style={{color:'black', fontSize:22,marginVertical:3,textAlign:'center',fontWeight:'bold'}}> Welcome {personInffo.name}</Text>
  </ImageBackground>
  
  <View style={{backgroundColor:'#d3d3d3'}}>
  <Text style={{color:'black',marginVertical:5,fontSize:18,marginLeft:10,marginTop:10}}>Activity</Text>
  <Image source={require('./../images/pic7.jpg')}style={{ width:300, height:330, marginLeft: 30, marginTop: 10,}} ></Image>
      <Text style={{color:'#28a745',marginVertical:1,textAlign:'center',fontStyle:'italic',fontSize:22,fontWeight:'bold',marginTop:10}}>Great Things Never Came From COMFORT ZONE</Text>
    </View>
    </View>
        
    );
}
}



const CustomDrawerComponent = (props) => (

  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: '#2e8b57', alignItems: 'center', justifyContent: 'center' }}>
   
      <Image source={require('../img/user_logo.png')}
        style={{ height: 120, width: 120, borderRadius: 60 }} />
      <Text style={{color: '#3498db' , textDecorationLine: 'underline'}}
      // onPress={() => this.choosePhoto()}
      >Change Image</Text>
    </View>
   

    <ScrollView style={{backgroundColor:'#faebd7'}}>
    <Text style = {{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,marginBottom:10}}>{props.navigation.getParam('personInfo').name}</Text>
      <DrawerItems {...props}></DrawerItems>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: speakerDashboard,
  Delete_Videos:deleteVideos,
  Upload_Videos: uploadVideos,
  Earning: viewEarning,
  Feedback_videos : viewFeedbackvideos,
  Setting:Settingspeaker 
  
},{
    contentComponent: CustomDrawerComponent,
  //  drawerBackgroundColor: '#3498db'
  })
const AppContainer = createAppContainer(AppDrawerNavigator);
export default AppContainer;



const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // color: 'blue'
},
Greeting: {
  fontSize: 20,
  fontWeight: '900',
},
gradient:{
  width:'100%',
  paddingVertical:15,
  alignItems:"center",
  justifyContent:"center",
  borderRadius:30
},text:{
  fontWeight:"bold",
  fontSize:14,
  color:'#ffffff',
  
}, container1:{
width:'80%',
marginVertical:15,
borderRadius:30,
marginTop:25,
marginLeft:30
},
icon:{
fontSize:30,
color:'black',
marginLeft:10
}
  
})

