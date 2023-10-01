import { View,Text ,Image , StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
// import Profile from '../Assets/Images/Profile'


const Nav = ()=>{
    return(
        <View style={styles.container}>
            <Icon name="menu" size={30} color="black" />
            <Icon name="person" size={30} color="black" />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        height: 60,
    }
})

export default Nav;