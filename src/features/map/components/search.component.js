import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar,} from 'react-native-paper';
import { LocationContext } from "../../../services/location/location.context";



const SearchbarView = styled.View`
    padding:15px;
    position: absolute;
    z-index: 999;
    top: 0px;
    width: 100%;
`;


export const Search = () => {
    const {keyword, search} = useContext(LocationContext);     
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword])

    return( 
        <SearchbarView>
            <Searchbar 
            icon="map"
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