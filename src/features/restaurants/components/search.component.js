import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar,} from 'react-native-paper';
import { LocationContext } from "../../../services/location/location.context";



const SearchbarView = styled.View`
      padding:15px;
`;


export const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
    const {keyword, search} = useContext(LocationContext);     
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return( 
        <SearchbarView>
            <Searchbar 
            icon={isFavouritesToggled ? "heart" : "heart-outline"}
            onIconPress={onFavouritesToggle}
            placeholder="Search for a location" 
            value={searchKeyword}
            onSubmitEditing={() => { 
                search(searchKeyword);
            }}
            onChangeText={(text) => {
                if (!text.length) {
                }
                setSearchKeyword(text);
            }}
            />
        </SearchbarView>
    )};