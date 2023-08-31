import { SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import HomeHeader from '../../components/HomeHeader';
import CardHome from '../../components/CardHome';
import Features from '../../components/Features';
import CarouselCards from '../../components/CarouselCards';
import AuthContext from '../../context/AuthContext';
import BlurObject from '../../components/svg/BlurObject';

export default function Home() {
    const { user, updateUser } = useContext(AuthContext);

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
            <CardHome />
            <Features />
            <CarouselCards />
        </SafeAreaView>
    );
}
