import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-new-snap-carousel';
import CarouselCardItem from './CarouselCardItem';

const data = [
    {
        title: 'Aenean leo',
        body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        imgUrl: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/09/28045911/Berbagai-Mitos-dan-Fakta-seputar-Malnutrisi-pada-Anak.jpg.webp',
    },
    {
        title: 'In turpis',
        body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
        imgUrl: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2021/09/07/webpnet-resizeimage-2021-09-0-20210907122747.jpg',
    },
    {
        title: 'Lorem Ipsum',
        body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
        imgUrl: 'https://sehatnegeriku.kemkes.go.id/wp-content/uploads/2018/05/283047-P66CRC-311-2.jpg',
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
