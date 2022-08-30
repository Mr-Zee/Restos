import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
 display: flex;
`
const Item= styled.div`
width :33%;
margin:auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 10px;
color: #270D41;
cursor: pointer;
`

function Footer() {
    const navigate = useNavigate();
    return (
            <Container>
            <Item><Icon icon="ph:house-simple" height="42"/>Dashboard</Item>
            <Item onClick={() => navigate('/order')}><Icon icon="ph:receipt" height="45"/>Orders</Item>
            <Item onClick={() => navigate('/product')}><Icon icon="ph:receipt" height="45"/>Product</Item>
            </Container>
    );
}

export default Footer;
