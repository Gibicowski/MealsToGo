import React, {useContext, useState} from "react";
import { StatusBar, FlatList, ScrollView, ImageBackground, Pressable } from 'react-native';
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantInfo } from "../components/restaurant-info.component"
import styled from "styled-components/native"
import { SafeArea } from "../../../components/utility/safe-area.component";
import { IonIcons } from "@expo/vector-icons";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
//import { blue100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { colors } from "../../../infastructure/theme/colors";
import { Search } from "../components/search.component"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Favourite } from "../../../components/favourites/favourite.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";
const image = require("../../../../assets/backgroundimage.png")




const Loading = styled(ActivityIndicator)`
  margin-left: 25px;
  margin-right: 25px;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;



export const RestaurantsScreen = ({navigation}) => {
  console.log("rendering screen...");
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  const {favourites,} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  
  return (
    <>
      <Search 
      isFavouritesToggled={isToggled} 
      onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
      <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>
    )}
            {isLoading ? (
        <LoadingContainer>
        <Loading size={50} animating={true} color={colors.brand.primary} />
      </LoadingContainer>
      ):(<FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return(
            <>
            <Favourite restaurant={item} />
            <TouchableOpacity 
              onPress={() => 
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfo restaurant={item}/>
            </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle = {{ padding: 16}}
        />)}   
      <ExpoStatusBar style='auto'/>
      </>
)
};


const ListView = styled.View`
      flex:1;
`;


