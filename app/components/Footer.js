import {View, Text, StyleSheet} from 'react-native';

const Footer =()=>{
    return(
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        bottom:'10%',
        left:0,
        right:0,
        height:50,
        justifyContent: 'center',
        marginHorizontal:"auto",
        marginTop:'auto',
        backgroundColor:'grey'
        
        
        
    }
})