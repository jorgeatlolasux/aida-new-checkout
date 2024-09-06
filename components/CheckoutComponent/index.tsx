"use client";
import React from "react";
import { Card } from "../ui/card";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutContent from "./CheckoutContent";
import {
    CardInfo,
    CommercesWithCashPayment,
    ContactInfo,
    Selection,
} from "./types";
import CheckoutFooter from "./CheckoutFooter";

const MOCK_DATA = {
    total: 100,
    companyName: "Aida",
    concept:
        "Compra de producto sproductosproductospro ductosproductosproductospro ductospro ductospro ductosprod uctosprod uctosproducto productosproductospro ductos",
};

const CheckoutComponent = () => {
    const [selection, setSelection] = React.useState<Selection>("transfer");
    const [cardInfo, setCardInfo] = React.useState<CardInfo>();
    const [contactInfo, setContactInfo] = React.useState<ContactInfo>();
    const [
        selectedCommerceWithCashPayment,
        setSelectedCommerceWithCashPayment,
    ] = React.useState<CommercesWithCashPayment>();
    return (
        <>
            <Card className="w-[400px]">
                <CheckoutHeader
                    setSelection={setSelection}
                    selection={selection}
                    companyName={MOCK_DATA.companyName}
                    total={MOCK_DATA.total}
                    concept={MOCK_DATA.concept}
                    contactInfo={contactInfo}
                    setContactInfo={setContactInfo}
                />
                <CheckoutContent
                    selection={selection}
                    total={MOCK_DATA.total}
                    cardInfo={cardInfo}
                    setCardInfo={setCardInfo}
                    selectedCommerceWithCashPayment={
                        selectedCommerceWithCashPayment
                    }
                    setSelectedCommerceWithCashPayment={
                        setSelectedCommerceWithCashPayment
                    }
                />

                <CheckoutFooter />
            </Card>
        </>
    );
};

export default CheckoutComponent;