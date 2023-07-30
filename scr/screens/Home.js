import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFoodList } from "../redux/Actions";

const primaryColor = "#EC3323";
const textColor = "#0D0D0D";
const text = "#5a5a5a";

const Home = ({ navigation }) => {
  const sliderData = [
    { img: require("../images/slider1.jpg") },
    { img: require("../images/slider2.jpg") },
    { img: require("../images/slider3.jpg") },
    { img: require("../images/slider4.jpg") }
  ];

  const dispatch = useDispatch();
  const popularMealsData = useSelector((state) => state.Reducer);
  const { isLoading, foodList } = popularMealsData;

  useEffect(() => {
    dispatch(getFoodList());
  }, []);

  const [bannerIndex, setBannerIndex] = useState(0);

  const renderSliderItem = ({ item, index }) => {
    return (
      <View
        key={String(index)}
        style={{ borderRadius: wp(5), overflow: "hidden" }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{ width: "100%", height: hp(25) }}
        />
      </View>
    );
  };

  const renderBannerView = () => {
    return (
      <View style={{ marginTop: hp(1) }}>
        <Carousel
          data={sliderData}
          renderItem={renderSliderItem}
          onSnapToItem={(index) => setBannerIndex(index)}
          sliderWidth={wp(90)}
          itemWidth={wp(90)}
          autoplay={true}
          autoplayInterval={2500}
          autoplayDelay={1000}
        />
        <Pagination
          dotsLength={sliderData.length}
          activeDotIndex={bannerIndex}
          containerStyle={{ marginTop: hp(-2) }}
          dotStyle={{
            width: wp(3),
            height: wp(3),
            borderRadius: wp(1.5),
            backgroundColor: primaryColor
          }}
          inactiveDotStyle={{ backgroundColor: "gray" }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };

  const renderPopularMeal = () => {
    return (
      <View style={{ marginVertical: hp(2), paddingHorizontal: wp(0.5) }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <Text style={{ fontWeight: "bold", fontSize: 17, color: textColor }}>
            Popular Recipes
          </Text>
          <Text style={{ color: text }}>See All</Text>
        </View>

        {isLoading ? (
          <View
            style={{
              height: hp(20),
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}>
            <ActivityIndicator size="large" color={primaryColor} />
            <Text style={{ color: text, marginLeft: wp(5) }}>
              Getting recipes list...
            </Text>
          </View>
        ) : (
          foodList?.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={String(index)}
                onPress={() => {
                  navigation.navigate("RECIPE_DETAILS", {
                    recipeIndex: index
                  });
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: hp(1.5),
                    marginBottom: hp(0.5),
                    paddingHorizontal: wp(3),
                    paddingVertical: hp(1),
                    backgroundColor: "white",
                    borderRadius: wp(3),
                    elevation: 1.5
                  }}>
                  <Image
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    style={{
                      width: wp(18),
                      height: wp(18),
                      borderRadius: wp(3)
                    }}
                  />
                  <View style={{ flex: 1, marginLeft: wp(4) }}>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 16,
                        color: textColor
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{ marginTop: hp(0.5), color: text }}>
                      {item.yields}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: primaryColor,
                      fontSize: 18,
                      fontWeight: "bold"
                    }}>
                    {`$ ${parseFloat(item.price).toFixed(1)}`}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
        )}
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          marginVertical: hp(1),
          backgroundColor: "#FBE6E6",
          borderRadius: wp(3),
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: wp(5)
        }}>
        <Image
          source={require("../images/search_icon.png")}
          style={{ width: wp(5), height: wp(5), marginRight: wp(3) }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#808080"
          style={{ fontSize: 17, fontWeight: "500", color: textColor }}
        />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: hp(2),
          paddingBottom: hp(1.5)
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={require("../images/drawer_icon.png")}
            style={{ width: wp(7), height: wp(7) }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}>
          <Image
            source={require("../images/location.png")}
            resizeMode="stretch"
            style={{ width: wp(3.5), height: wp(5), marginRight: wp(2) }}
          />
          <Text style={{ color: text }}>Freedom way, Lekki phase</Text>
        </View>
        <Image
          source={require("../images/profile_icon.png")}
          style={{ width: wp(10), height: wp(10) }}
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: wp(5), backgroundColor: "#F9F9F9" }}
      showsVerticalScrollIndicator={false}>
      <View>
        {renderHeader()}
        {renderSearchBar()}
        {renderBannerView()}
        {renderPopularMeal()}
      </View>
    </ScrollView>
  );
};

export default Home;
