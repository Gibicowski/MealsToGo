import React from "react";
import { StyleSheet, } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native"
import { SvgXml} from "react-native-svg";
import star from "../../../../assets/star";
import openIcon from "../../../../assets/openIcon";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import { 
    Address, 
    Open, 
    Section, 
    SectionEnd, 
    Rating, 
    Info, 
    Title, 
    RestaurantCard, 
    RestaurantCardCover 
} from "./restaurant-info-card.styles"


export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = 'Kanatçı Bilbo',
        icon = 'icon',
        address = 'Esenler',
        photos = ["https://lh3.googleusercontent.com/p/AF1QipMpe8_EfI1jZOUpt1YugyGcFLmhWIQ_zYSjPRTD=w1080-h608-p-no-v0"]      ,
        isOpen = true,
        rating = 5,
        isClosedTemporarily = false,
        placeId
    } = restaurant;
    
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard elevation={0}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
            <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml key={`star-${placeId}-${i}`} 
                            xml={star} 
                            width={20} 
                            height={20}
                            />
                        ))}
                    </Rating>
                    <SectionEnd>
                            {isOpen && <Open xml={openIcon} width={20} height={20}/>}
                    </SectionEnd>
                </Section>
                <Text variant="caption">{address}</Text>
            </Info>
        </RestaurantCard>
    );
};






