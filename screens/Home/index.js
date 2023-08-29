import { SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import HomeHeader from '../../components/HomeHeader';
import CardHome from '../../components/CardHome';
import Features from '../../components/Features';
import CarouselCards from '../../components/CarouselCards';
import AuthContext from '../../context/AuthContext';

export default function Home() {
    const { user, updateUser } = useContext(AuthContext);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: 80,
                paddingHorizontal: 30,
                backgroundColor: '#FFF',
            }}
        >
            <HomeHeader name={user?.name} />
            <CardHome />
            <Features />
            <CarouselCards />
        </SafeAreaView>
    );
}
