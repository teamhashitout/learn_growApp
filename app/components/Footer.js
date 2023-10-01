import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Link href='/'>
                <Icon name='home' size={27} color="white" />
            </Link><Link href='/Login'>
                <Icon name='person' size={27} color="white" />
            </Link><Link href='/'>
                <Icon name='clipboard' size={27} color="white" />
            </Link><Link href='/'>
                <Icon name='home' size={27} color="white" />
            </Link>

        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        boder: '2px black solid',
        marginTop: 'auto',
        width: '100%',
        backgroundColor: '#f77272',
        marginBottom: '1rem',
        
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 15,
    },
})


