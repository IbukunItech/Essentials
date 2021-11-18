import React, {useState} from 'react';
import styled from 'styled-components';
import img1 from './Asset/vul.jpg';
import img2 from './Asset/mechanic.jpg';
import img3 from './Asset/p.jpg';
import img4 from './Asset/rewir.jpg';
import img5 from './Asset/elect.jpg';
import img6 from './Asset/plumb.jpg';
import img7 from './Asset/fumig.jpg';
import img8 from './Asset/paints.jpg';







const Ibkdetails = () => {
    const [data,] = useState([
        {
        id: 1,
        name: "Vulcanizers",
        foto: img1,
        },
        {
            id: 2,
            name: "Mechanics",
            foto: img2,
            },
            {
                id: 3,
                name: "Panel Beaters",
                foto: img3,
                },
                {
                    id: 4,
                    name: "Rewires",
                    foto: img4,
                    },                    
    ])
    const [data1,] = useState([ 
            {
                id: 5,
                name1: "Electricians",
                foto1: img5,
                },
                {
                    id: 6,
                    name1: "Plumbers",
                    foto1: img6,
                    },
                    {
                        id: 7,
                        name1: "Fumigators",
                        foto1: img7,
                        },
                        {
                            id: 8,
                            name1: "Painters",
                            foto1: img8,
                            },
        ])
    return (
        <Container>
            <Wrapper>
                <TitleHolder>
                    <Title>Automobile Services</Title>                    
                </TitleHolder>
                <CardHolder>
                {data.map((props) => {
                    return (
                        <Card>
                        <Pix src={props.foto} />
                    <Details> {props.name} </Details>                
                    </Card>                               
                );
            })}
                </CardHolder>
                <TitleHolder>
                    <Title>House Maintenance</Title>                    
                </TitleHolder>
                <CardHolder>
                {data1.map((props) => {
                    return (
                        <Card>
                        <Pix src={props.foto1} />
                    <Details> {props.name1} </Details>                
                    </Card>                               
                );
            })}
                </CardHolder>
            </Wrapper>
        </Container>
    )
}

export default Ibkdetails




const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const TitleHolder = styled.div`
width: 100%;
height: 150px;
color: black;
display: flex;
flex-direction: column;
justify-content: center;
`;
const Title = styled.div`
font-size: 90px;
`;

const Details = styled.div`
font-size: 25px;
margin-top: 15px;
`;
const Pix = styled.img`
width: 200px;
height: 230px;
object-fit: cover;
background-color: blue;
border-radius: 10px 10px 0 0;
transition: all 350ms;

: hover {
    cursor: pointer;
    transform: scale(1.03)

}
`;
const Card = styled.div`
width: 200px;
height: 250px;
border-radius: 10px;
margin: 20px 10px;
display: flex;
flex-direction: column;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Container = styled.div`
width: 100%;
height: 100%;
`;