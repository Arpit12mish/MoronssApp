import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions } from 'react-native';

interface CarouselItem {
  id: string;
  image: number;
}

const Carousel: React.FC = () => {
  const flatlistRef = useRef<FlatList<CarouselItem>>(null);
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current?.scrollToIndex({ index: 0, animated: true });
      } else {
        flatlistRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data: CarouselItem[], index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const carouselData: CarouselItem[] = [
    { id: '01', image: require('../../../assets/bannerImage/image.png') },
    { id: '02', image: require('../../../assets/bannerImage/image.png') },
    { id: '03', image: require('../../../assets/bannerImage/image.png') },
  ];

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <View>
      <Image source={item.image} style={{ height: 150, width: screenWidth }} />
    </View>
  );

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = () => (
    <View style={styles.indicatorContainer}>
      {carouselData.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: activeIndex === index ? 'orange' : 'black' },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      {renderDotIndicators()}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});
