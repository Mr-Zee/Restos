import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
 justify-content: center;
  align-items: center;
`
const HeadBox = styled.div`
border: none;
    display: flex;
    padding-top: 20px;
`
const DeliveryImage = styled.img`
height:110px;
width:110px;
border-radius: 50%;
margin: 0px 20px;
`
const Heading = styled.h4`
margin: auto 10px auto ;
font-size:${(props) => props.type === "Head" ? "16px" : "14px"};
font-weight:${(props) => props.type === "Head" ? "500" : "400"};
`
const Rate = styled.h4`
color:#270D41;
margin:${(props) => props.type === "Head" ? "auto 47px auto auto" : "auto 60px auto auto"};
font-size:${(props) => props.type === "Head" ? "16px" : "14px"};
font-weight:${(props) => props.type === "Head" ? "500" : "400"};
    `

const Hr = styled.div`
flex-grow:1;
color:#FFEFF8;
height:1px;
border:1px solid #FFEFF8;
margin:10px auto;
width:95%;
`
const Button = styled.button`
    cursor:none;
    height:29px;
    width:83px;
    align-items: center;
    margin: 10px 20px;
    border-radius: 5px;
    background-color: #5C0FB6;
    color:#FFFFFF;
    font-size:11px;
    font-weight:400;
    border:none;
    padding: 5px 10px;
    margin-left:auto;
    `
const Main = styled.div`
display:flex;
flex-direction: column;
margin:auto;
`
const MainBorder = styled.div`
  border: 1px solid #FFEFF8;
  margin:auto 18px auto ;
  justify-content: center;
  align-items: center;
  padding:10px;
`
const DeliveryDetail = () => {
    return (
        <Container>
            <Heading type="Head">Delivery Boys Details</Heading>
            <HeadBox>
                <DeliveryImage alt="image " src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw" />
                <Main> <Heading type="Head">Jonathan Young</Heading>
                    <Heading>(187)268-4639</Heading>
                </Main>
                <Rate>
                    <Button>
                        Edit
                    </Button>
                </Rate>
            </HeadBox>

            <Hr />
            <MainBorder>
                <HeadBox>
                    <Heading>License number</Heading>
                    <Heading>(614)749-4685</Heading>
                </HeadBox>
                <HeadBox>
                    <Heading>Vehicle number</Heading>
                    <Heading>KL 07 B 4246</Heading>
                </HeadBox>
            </MainBorder>
        </Container>
    )
}

export default DeliveryDetail