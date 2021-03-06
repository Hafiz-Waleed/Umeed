import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

class Login extends Component {
    static navigationOptions = {  
        title: 'Umeed',  
        headerStyle: {  
            backgroundColor: '#28a745',
        
        },  
        headerTintColor: 'black',  
        headerTitleStyle: {  
           fontWeight: 'bold',  
           marginHorizontal: '40%',
           
        },  
    };  
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            userRole:'',
        }
    }
    myfun = () => {
        let loginInfo = {};
        loginInfo.email = this.state.email;
        loginInfo.password = this.state.password;
        loginInfo.userRole= this.state.userRole;

        if( loginInfo.email== 'admin@admin.com' && loginInfo.password=='admin')
        {
            this.props.navigation.navigate('adminDashboard', {username:loginInfo.email});   
        }
        else{
            // var url = 'http://89.89.89.43:5000/login'; //Office
                // var url = 'http://192.168.0.108:5000/login'; // Home
                // var url = 'http://192.168.43.21:5000/login';   // Huawei Mate10 lite
                var url = 'https://desolate-wave-36898.herokuapp.com/login'

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(loginInfo), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => {
                    if (response.error) {
                        this.setState({ error: "Invalid Email or Password" })
                    }
                    // else {
                    //     //   console.warn('Success:', response);
                    //     this.props.navigation.navigate('patientDashboard', { personInfo: response })
                    //     // this.props.navigation.navigate('patientHome',{personInfo:  response })
                    // }
                    else if(response.userRole== 'Patient')
                    {
                        this.props.navigation.navigate('patientDashboard', {personInfo: response});
                    }
                    else if(response.userRole=='Psychologist')
                    {
                        this.props.navigation.navigate('psychologistDashboard', {personInfo: response});
                    }
                    else if(response.userRole=='MotivationalSpeaker')
                    {
                        this.props.navigation.navigate('speakerDashboard', {personInfo: response});
                    }
                    else if(response.userRole=='ContentWriter')
                    {
                        this.props.navigation.navigate('writerDashboard', {personInfo: response});
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    }
 
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.conatiner}>
            <View >
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('./img/umeedLogo.png')} />
                </View>
                <Text style={{ color: 'red', textAlign: 'center' }} >
                    {this.state.error}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    placeholderTextColor="black" />
                    
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    placeholderTextColor="black" />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}
                        onPress={() => this.myfun()}
                    >LOGIN
                    </Text>
                </TouchableOpacity>

                <Text style={styles.newAcoount} onPress={() => this.props.navigation.navigate('SignupOptions')}>Create New Account</Text>
            </View>
            </KeyboardAvoidingView>
        );
    }
} export default Login

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: "center",
        // flexGrow: 1,
        justifyContent: "center"

    },logoContainer: {
        marginTop:30,
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center"

    },logo:{
        width: 100,
        height: 100

    },input:{
        fontWeight: '500',
        marginLeft: 15,
        marginRight: 15,
        height: 50,
        backgroundColor: '#28a745',
        opacity: 0.5,
        marginBottom: 15,
        borderRadius: 14,
        color: 'black',
        paddingHorizontal: 10

    },buttonContainer: {
        marginLeft: 120,
        marginRight: 120,
        backgroundColor: '#28a745',
        paddingVertical: 15,
        marginBottom: 270,
        borderRadius: 14,

    },buttonText: {
        color: 'black',
        fontWeight: '900',  
        textAlign: 'center',
        borderRadius: 14,

    },newAcoount: {
        color: '#343a40',
        marginHorizontal: '30%',
        fontWeight: "bold",
        marginBottom: 30,
        textDecorationLine: "underline"
    }
})
