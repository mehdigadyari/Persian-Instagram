import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import Logo from '../../assets/images/Ui.png'
import { Input, Button } from 'react-native-elements'
import Colors from '../../constants/Colors'


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    formView: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    Img: {
        width: "60%",
        height: 80,
        marginTop: .5,
        paddingTop: 0
    },
    containerStyle: {
        width: "90%",
        marginTop: 10,
    },
    inputContainerStyle: {
        backgroundColor: Colors.inputBackgroundColor,
        borderWidth: 1,
        borderColor: Colors.inputBorderColor,
        borderRadius: 5
    },
    inputStyle: {
        fontSize: 12,
        paddingLeft: 10
    },
    titleBtn: {
        fontSize: 12,
        fontWeight: "500"
    },
    ButtonContainerStyle: {
        alignSelf: "flex-end",
        marginRight: 30,
        marginTop: 5
    },
    logintitleButton: {
        fontSize: 12,
        fontWeight: "700"
    },
    loginButtonContainerStyle: {
        width: "85%"
        , marginTop: 5
    },
    footer: {
        width: "100%",
        height: 40,
        borderTopColor: Colors.inputBorderColor,
        borderTopWidth: .5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
})

const SignInScreen = ({ navigation }) => {

    const [dis, setDis] = useState(true)
    const [mobile, setMobile] = useState("")
    const [mobileError, setMobileError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")


    useEffect(() => {

        let mobilePattern = /^09[0-9]{9}$/

        if (mobilePattern.test(mobile)) {
            setPasswordError("")
        } else {
            setPasswordError("Phone number is invalid")
        }
    }, [mobile])


    useEffect(() => {

        if (password.length > 6) {
            setPasswordError("")
        } else {
            setPasswordError("Password must be at least 6 char")
        }
    }, [password])



    useEffect(() => {
        if (mobile === "" && password === "") {
            setPasswordError("")
            setMobileError("")
            setDis(true)
        }
        let mobilePattern = /^09[0-9]{9}$/
        if (mobilePattern.test(mobile) && password.length > 6) {
            setDis(false)
        } else { setDis(true) }


    }, [mobile, password])



    const [iskeyboardOpen, setIskeyboardOpen] = useState(false)

    const keyOpen = () => {
        setIskeyboardOpen(true)
    }
    const keyClose = () => {
        setIskeyboardOpen(false)
    }

    const login = async () => {
        await AsyncStorage.setItem('mobile', mobile)
        navigation.navigate('Main')
    }


    return (
        <KeyboardAvoidingView style={{ flex: 1, }} behavior='padding'  >


            <View style={styles.root} >

                <View style={styles.formView} >

                    <Image source={Logo} style={styles.Img} />
                    <Input
                        placeholder='Phone Number'
                        keyboardType='number-pad'
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        onFocus={keyOpen}
                        onBlur={keyClose}
                        errorMessage={mobileError}
                        onChangeText={(txt) => setMobile(txt)}
                    />
                    <Input
                        placeholder='Password'
                        containerStyle={[styles.containerStyle, { marginTop: 5 }]}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        secureTextEntry={true}
                        onFocus={keyOpen}
                        onBlur={keyClose}
                        errorMessage={passwordError}
                        onChangeText={(txt) => setPassword(txt)}
                    />

                    <Button
                        title='Forget Password?'
                        titleStyle={styles.titleButton}
                        containerStyle={styles.ButtonContainerStyle}
                        type='clear'
                        onPress={() => navigation.navigate('ForgetPassword')}
                    />
                    <Button
                        title='Log In'
                        titleStyle={styles.logintitleButton}
                        containerStyle={styles.loginButtonContainerStyle}
                        disabled={dis}
                        onPress={login}

                    />

                </View>


                {iskeyboardOpen ? (null) : (<View style={styles.footer}  >
                    <Text style={[styles.titleButton, { color: 'gray' }]}>Don't have an account?</Text>
                    <Button
                        title='Sign Up'
                        titleStyle={styles.titleButton}
                        // containerStyle={styles.ButtonContainerStyle}
                        type='clear'
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </View>)}


            </View>
        </KeyboardAvoidingView>
    )
}

export default SignInScreen
