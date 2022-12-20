import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { TouchableOpacity } from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info.component";




const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`;

export const FavouritesScreen = ({navigation}) => {
    const { favourites } = useContext(FavouritesContext);
    const { restaurants } = useContext(RestaurantsContext);
    return favourites.length ? (
        <SafeArea>
            <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      </SafeArea>
  ) : (

        <NoFavouritesArea>
            <Text center>No favourites yet!</Text>
        </NoFavouritesArea>
    );
};





