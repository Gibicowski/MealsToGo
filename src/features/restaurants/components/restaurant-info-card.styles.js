import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml} from "react-native-svg";


export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body}
`;

export const Open = styled(SvgXml)`
    flex-direction: row;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]}
    padding-bottom: ${(props) => props.theme.space[2]}
`;


export const Info = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

export const Title = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
    color: ${props => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.body}
`;

export const RestaurantCard = styled(Card)`
    backgroundColor: ${props => props.theme.colors.ui.quaternary};
    width:360px;
    height: auto;
    marginTop:10px;
    marginBottom:10px;

`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding:16px;
    backgroundColor: ${props => props.theme.colors.ui.quaternary}
    marginBottom: 0px;
`;