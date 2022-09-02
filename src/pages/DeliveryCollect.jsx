import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DeliveryColBox } from '../components/ProdBox.jsx';

const Container = styled.div`
margin:0px 23px;
`
const Heading = styled.h3`
font-weight: ${(props) => props.type === "Modal" ? "400" : "500"};
font-size: ${(props) => props.type === "Modal" ? "15px" : "20px"};
line-height:${(props) => props.type === "Modal" && "30px"};
color: #270D41;
`
const MainBorder = styled.div`
  border:none;
  padding-top: 20px;
  margin:auto;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
    background-color: #5C0FB6;
    color: #FFFFFF;
    margin: 10px 0px ;
    height: 45px;
    border:none;
    border-radius: 6px;
    width:100%;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
background: #FFEFF8;
border:none;
border-radius:3px;
width:${(props) => props.name === "divi" ?"80%" : "100%"};
justify-content: center;
padding:10px;
height:48px;
`
const Divider = styled.div`
    display:flex;
`
const DividCols= styled.div`

`
const DeliveryCollect = () => {
    function addcategory(e) {
        e.preventDefault();
        setShowSuccessModal(true);
    }
    function closeModal(e) {
        e.preventDefault();
        setShowSuccessModal(false);
        navigate("/deliverycollect");
    }

    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const navigate = useNavigate();
    return (
        <Container>
            <Heading>DeliveryCollect</Heading>
            <MainBorder>
                <DeliveryColBox onClick={(e) => { addcategory(e) }} />
                <DeliveryColBox onClick={(e) => { addcategory(e) }} />
                <DeliveryColBox onClick={(e) => { addcategory(e) }} />
                <DeliveryColBox onClick={(e) => { addcategory(e) }} />
                <DeliveryColBox onClick={(e) => { addcategory(e) }} />
            </MainBorder>

            <Modal show={showSuccessModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Body>
                    <Container>
                        <Icon icon="akar-icons:cross" cursor="pointer" height="30" onClick={(e) => { closeModal(e) }} />
                        <Divider>
                            <DividCols>
                                <Heading type="Modal">Cash in hand</Heading>
                                <Input type="text" name="divi"/>
                            </DividCols>
                            <DividCols>
                                <Heading type="Modal">Amount to collect</Heading>
                                <Input type="text" name="divi"/>
                            </DividCols>
                        </Divider>
                        <Button id="continue" onClick={(e) => { closeModal(e) }} >Save</Button>
                    </Container>

                </Modal.Body>

            </Modal>


        </Container>
    )
}

export default DeliveryCollect