import { SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import HomeHeader from '../../components/HomeHeader';
import CardHome from '../../components/CardHome';
import Features from '../../components/Features';
import CarouselCards from '../../components/CarouselCards';
import AuthContext from '../../context/AuthContext';
import BlurObject from '../../components/svg/BlurObject';
import { removeDataStorage } from '../../utils/storage.utils';

export default function Home({ navigation }) {
    const { user } = useContext(AuthContext);

    const handleToMalnutrition = () => {
        return navigation.navigate('AICamera');
    };

    removeDataStorage('isFirstTime');

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: 60,
                paddingHorizontal: 30,
                backgroundColor: '#FFF',
            }}
        >
            <BlurObject />
            <HomeHeader name={user?.name} />
            <CardHome handleToMalnutrition={handleToMalnutrition} />
            <Features />
            <CarouselCards />
        </SafeAreaView>
    );
}
