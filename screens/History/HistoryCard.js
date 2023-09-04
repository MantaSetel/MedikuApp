import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';
import PrimaryButton from '../../components/PrimaryButton';
import { COLORS } from '../../constants';

const ProfileImage = ({ isMalnutrition }) => {
    return (
        <View style={styles.profileWrapper}>
            <Image
                style={styles.profileImage}
                source={
                    isMalnutrition
                        ? require('../../assets/images/malnutrition-results/malnutrition.png')
                        : require('../../assets/images/malnutrition-results/health.png')
                }
            />
        </View>
    );
};

const HistoryCard = ({ isMalnutrition, date, id, handleShowDetail }) => {
    return (
        <View style={styles.container}>
            <ProfileImage isMalnutrition={isMalnutrition} />
            <View style={styles.profileDetails}>
                <Text
                    style={[
                        styles.type,
                        {
                            color: isMalnutrition
                                ? COLORS.warning
                                : COLORS.success,
                        },
                    ]}
                >
                    {isMalnutrition ? 'Malnutrisi' : 'Normal'}
                </Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <PrimaryButton
                labelStyle={{
                    fontSize: 12,
                    lineHeight: 15,
                }}
                contentStyle={{
                    paddingVertical: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                width={100}
                height={35}
                marginRight={0}
                marginLeft="auto"
                icon="eye-outline"
                onPress={() => handleShowDetail(id)}
            >
                Detail
            </PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.6)',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 16,
        elevation: 8, // This is for Android
        backgroundColor: '#fff',
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
    },
    profileWrapper: {
        width: 70,
        height: 70,
        overflow: 'hidden',
    },
    profileImage: {
        height: '150%',
        width: '100%',
    },
    profileDetails: {
        marginLeft: 15,
        height: '100%',
        padding: 15,
        paddingHorizontal: 0,
        justifyContent: 'space-between',
    },
    type: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    date: {
        color: COLORS.gray,
    },
});

export default HistoryCard;
