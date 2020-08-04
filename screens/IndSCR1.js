import React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import styles from './styles/Index.styles'

class IndexScreen extends React.Component {
    render() {
        return (
            <View style={ styles.MainView }>
                <View style={styles.FirstView}>
                    <Text >
                        first project
                </Text>
                </View>
                <View style={styles.SecondView}>
                    <Text>
                        second project
                </Text>
                </View>
                <View style={styles.ThirdView}>
                    <Text>
                        third project
                </Text>
                </View>
            </View>
        )
    }

}

export default IndexScreen