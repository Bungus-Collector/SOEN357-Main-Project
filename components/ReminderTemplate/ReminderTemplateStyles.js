import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ReminderOuter: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#519872',
        marginTop: 10,
        width: '100%',
        borderRadius: 18,
        height: 160,
    },
    ReminderInner: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        backgroundColor: '#3B5249',
        borderRadius: 18,
        marginTop: 50,
        height: '60%',
        width: '90%',
    },
    ReminderOuterText: {
        color: '#FFFFFF',
        fontSize: 16,
        position: 'absolute',
        left: 10,
        top: 10,
    },
    ReminderOuterTextBigger: {
        color: '#FFFFFF',
        fontSize: 18,
        position: 'absolute',
        left: 10,
        top: 30,
        fontWeight: 'bold',
    },
    ReminderInnerText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    ReminderInnerTextBigger: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    ReminderNameText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    ReminderButton: {
        backgroundColor: '#A4B494',
        borderRadius: 18,
        width: '80%',
        height: 30,
    },
    ReminderButtonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        padding: 3,
        fontWeight: 'bold',
    },
    EditIcon: {
        position: 'absolute',
        height: 25,
        width: 25,
        left: 100,
    },
});
