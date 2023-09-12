import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 40,
    },
    container: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150
    },
    h1: {
        fontSize: 28,
        color: '#000',
        fontWeight: 'bold',
        marginVertical: 10,

    },
    h2: {
        color: '#999',
        fontSize: 15,
    },
    inputArea: {
        width: '100%',
        paddingTop: 20,
    },
    inputLabel: {
        color:'#777',
        fontSize: 16,
        fontWeight:'bold',
        marginBottom:7,
    },
    inputField: {
        borderWidth:2,
        borderRadius:5,
        borderColor:'#ddd',
        fontSize:15,
        padding:10,
    },
    aditionals: {
        width:'100%',
    },
    forgotBtnArea: {
        paddingVertical:20,
        alignSelf:'flex-end',
    },
    forgotBtnText: {
        fontSize:15,
        fontWeight:'bold',
        color:'#416287',
    },
    button: {
        backgroundColor:'#416287',
        width:'100%',
        padding:10,
        borderRadius:5,
    },
    buttonText: {
        fontSize:16,
        alignSelf:'center',
        color:"white",
    },
    signUpArea: {
        flexDirection:'row',
        marginTop:30,
    },
    signUptext: {
        fontSize:13,
        fontWeight:'bold',
        color: '#999',
    },
    signUpBtnText: {
        fontSize:13,
        fontWeight:'bold',
        color:'#416287',
        marginLeft:5,
    },
    footerArea: {
        marginVertical:30,
    },
    footertext: {
        fontSize:13,
        color:'#999'
    }
})