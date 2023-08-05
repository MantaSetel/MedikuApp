import { SafeAreaView } from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import CardHome from '../../components/CardHome';
import Features from '../../components/Features';
import CarouselCards from '../../components/CarouselCards';

export default function Home() {
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
            <HomeHeader />
            <CardHome />
            <Features />
            <CarouselCards />
        </SafeAreaView>
    );
}
