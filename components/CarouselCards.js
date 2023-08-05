import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-new-snap-carousel';
import CarouselCardItem from './CarouselCardItem';

const data = [
    {
        title: 'Aenean leo',
        body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        imgUrl: 'https://picsum.photos/id/11/200/300',
    },
    {
        title: 'In turpis',
        body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
        imgUrl: 'https://picsum.photos/id/10/200/300',
    },
    {
        title: 'Lorem Ipsum',
        body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
        imgUrl: 'https://picsum.photos/id/12/200/300',
    },
];

const CarouselCards = () => {
    const isCarousel = React.useRef(null);

    return (
        <View
            style={{
                marginTop: 30,
                height: 146,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                loop
                autoplay
                autoplayDelay={1000}
                autoplayInterval={3000}
                sliderWidth={310}
                itemWidth={310}
                sliderHeight={146}
                itemHeight={146}
            />
        </View>
    );
};

export default CarouselCards;
