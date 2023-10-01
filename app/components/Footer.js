import { Link } from 'expo-router';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer =()=>{
    return(
        <View style={styles.container}>
            <Link href='/'>
                <Icon name='home'  size={30} color="black" />
            </Link><Link href='/Login'>
                <Icon name='person'  size={30} color="black" />
            </Link><Link href='/'>
                <Icon name='clipboard'  size={30} color="black" />
            </Link><Link href='/'>
                <Icon name='home'  size={30} color="black" />
            </Link>

        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container:{
        boder: '2px black solid',
        color: 'red',
        marginTop: 'auto',
        // marginHorizontal:'auto',
        width: '90%',
        backgroundColor: '#F5B3B9',
        marginBottom: '1rem',
        height: '3.5rem',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding:5
        
        
    }
})