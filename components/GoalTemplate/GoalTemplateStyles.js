import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    GoalOuter: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        backgroundColor: '#519872',
        marginTop: 10,
        width: '100%',
        borderRadius: 18,
        height: 120,
    },
    GoalInner: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        backgroundColor: '#3B5249',
        borderRadius: 18,
        height: '90%',
        width: '90%',
    },
    GoalText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
    GoalNameText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    GoalRewardText: {
        color: 'yellow',
        fontSize: 16,
    },
    GoalButton: {
        backgroundColor: '#A4B494',
        borderRadius: 18,
        width: '80%',
        height: 30,
    },
    GoalButtonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        padding: 3,
        fontWeight: 'bold',
    },
});
