import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#382933',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },
    ContainerCenter: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
    },
    HeaderArea: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        flex: 1,
    },
    HeaderText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        fontWeight: 'bold',
    },
    BodyArea: {
        textAlignVertical: 'center',
        flex: 4,
        margin: '10%',
        marginTop: '15%',
    },
    BodyText: {
        fontSize: 16,
        color: 'white',
        textAlignVertical: 'center',
    },
    FooterText: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 12,
    },
    TextInput: {
        height: 50,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        padding: 10,
    },
    ButtonDefault: {
        height: 90,
        width: '100%',
        backgroundColor: '#A4B494',
        borderRadius: 25,
        margin: 15,
    },
    ButtonDefaultText: {
        color: '#000000',
        fontSize: 24,
        textAlign: 'right',
        padding: 28,
    },
    ButtonIcon: {
        position: 'absolute',
        top: 20,
        left: 20,
        height: 50,
        width: 50,
    },
    ReminderArea: {
        backgroundColor: '#519872',
        borderRadius: 18,
        marginTop: 20,
        height: 200,
        width: '100%',
        padding: 15,
    },
    ReminderText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
