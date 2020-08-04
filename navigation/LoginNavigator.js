import { createAppContainer, createStackNavigator } from "react-navigation";
import SignInScreen from '../screens/Login/SignInScreen'
import SignUpScreen from '../screens/Login/SignUpScreen'
import ForgetPasswordScreen from '../screens/Login/ForgetPasswordScreen'
import SplashScreen from '../screens/Login/SplashScreen'

export default createAppContainer(
    createStackNavigator({
        Splash: SplashScreen,
        SignIn: SignInScreen,
        SignUp: SignUpScreen,
        ForgetPassword: ForgetPasswordScreen
    }, {
        headerMode: 'none'
    })
)