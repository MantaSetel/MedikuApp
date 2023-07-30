import React, { useRef, useState } from 'react';
import {
    Animated,
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import slides from '../slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';

const Onboarding = () => {
    // eslint-disable-next-line no-unused-vars
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const handleSkipPressed = () => {
        slidesRef.current.scrollToEnd();
    };

    const isLast = slidesRef.current && currentIndex === slides.length - 1;

    return (
        <View style={styles.container}>
            <View style={{ flex: 5 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <View style={styles.bottomNavigation}>
                {isLast ? (
                    <View>
                        <Button title="Hello" />
                    </View>
                ) : (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}
                    >
                        <Paginator data={slides} scrollX={scrollX} />
                        <Text
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 30,
                            }}
                            onPress={handleSkipPressed}
                        >
                            Skip
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomNavigation: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export default Onboarding;
