import {StyleSheet} from 'react-native'


const styles = StyleSheet.create ( {
    MainView :{
        backgroundColor: '#154', flex: 1 , flexDirection : 'row'
    },
    FirstView : {
        padding: 30, flex: 2, backgroundColor: '#00f'
    },
    SecondView :{
        padding: 30, flex: 1, backgroundColor: '#025'
    },
    ThirdView : {
        padding: 30, flex:3, backgroundColor: 'red'
    }
})

export default styles