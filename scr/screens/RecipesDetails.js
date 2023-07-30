import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";

const primaryColor = "#EC3323";
const textColor = "#0D0D0D";
const text = "#5a5a5a";

const RecipesDetails = (props) => {
  const popularMealsData = useSelector((state) => state.Reducer);
  const { foodList } = popularMealsData;
  const { navigation, route } = props;
  const { recipeIndex } = route.params || {};
  const detailRecipes = foodList && foodList[recipeIndex || 0];
  const { name, description, image, yields, keywords, price } =
    detailRecipes || {};

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: hp(2),
          paddingBottom: hp(1.5),
          paddingHorizontal: wp(5)
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require("../images/backArrow.png")}
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
          <Text style={{ color: text }}>Recipe Details</Text>
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
      style={{ flex: 1, backgroundColor: "#F9F9F9" }}
      showsVerticalScrollIndicator={false}>
      <View>
        {renderHeader()}

        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={{
            width: wp(100),
            height: hp(35)
          }}
        />

        <View style={{ paddingHorizontal: wp(5), paddingBottom: hp(5) }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 24,
              color: textColor,
              marginTop: hp(2)
            }}>
            {name}
          </Text>
          <Text style={{ marginTop: hp(0.5), color: text }}>{yields}</Text>

          <Text
            style={{
              color: primaryColor,
              fontSize: 18,
              fontWeight: "bold",
              marginTop: hp(3)
            }}>
            {`Price : $ ${parseFloat(price).toFixed(1)}`}
          </Text>

          <Text style={{ marginTop: hp(0.5), color: text, fontSize: 16 }}>
            {description}
          </Text>

          <Text
            style={{
              marginTop: hp(0.5),
              color: textColor,
              fontWeight: "bold",
              fontSize: 16,
              marginTop: hp(5)
            }}>
            Keywords
          </Text>
          <Text style={{ marginTop: hp(0.5), color: text }}>{keywords}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipesDetails;
