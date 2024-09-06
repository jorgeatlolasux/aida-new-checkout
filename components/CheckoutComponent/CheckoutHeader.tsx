"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CardHeader } from "../ui/card";
import { ContactInfo, Selection } from "./types";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

interface CheckoutHeaderProps {
    selection: Selection;
    setSelection: (value: Selection) => void;
    companyName: string;
    total: number;
    concept?: string;
    contactInfo?: ContactInfo;
    setContactInfo: (contactInfo: ContactInfo) => void;
}

const CheckoutHeader = (props: CheckoutHeaderProps) => {
    return (
        <CardHeader className="p-0  space-y-0">
            <div className="relative space-y-16 ">
                <img
                    src="https://picsum.photos/400/200"
                    className="rounded-t-xl"
                />
                <div className="absolute bg-white shadow-md text-gray-700 px-4 py-2 left-1/2 transform -translate-x-1/2 bottom-20  w-7/12 h-36  rounded-md">
                    <div className=" relative w-full h-full">
                        <img
                            src="https://picsum.photos/200"
                            className="rounded-full absolute -top-1/3  left-1/2 transform -translate-x-1/2 w-20 h-20"
                        />
                        <div className="h-full pt-10 text-center">
                            <h1 className="">{props.companyName}</h1>
                            <h1 className="font-bold">MXN ${props.total}</h1>
                            <p className="text-xs text-gray-500 line-clamp-2 t">
                                {props.concept}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-4 space-y-1">
                    <h1 className="text-sm text-gray-600">Método de pago</h1>
                    <Select
                        defaultValue="transfer"
                        onValueChange={(value) => {
                            props.setSelection(value as Selection);
                        }}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona un método de pago" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="transfer">
                                Transferencia
                            </SelectItem>
                            <SelectItem value="card">Tarjeta</SelectItem>
                            <SelectItem value="cash">Efectivo</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="mx-4 pt-4">
                <h1 className="text-sm text-gray-600">
                    Información de contacto
                </h1>
                <div className="mt-2">
                    <Input
                        className="rounded-b-none border-b-none"
                        placeholder="correoelectrónico@ejemplo.com"
                        value={props.contactInfo?.email}
                        onChange={(e) => {
                            props.setContactInfo({
                                ...(props.contactInfo as ContactInfo),
                                email: e.target.value,
                            });
                        }}
                    />
                    <div className="flex">
                        <PhoneInput
                            className="w-full"
                            inputClassName="w-full"
                            inputStyle={{
                                borderTopRightRadius: "0",
                                borderTopLeftRadius: "0",
                                borderBottomRightRadius: "6px",
                            }}
                            countrySelectorStyleProps={{
                                buttonStyle: {
                                    padding: "0.5rem",
                                    borderTopRightRadius: "0",
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "6px",
                                },
                            }}
                            defaultCountry="mx"
                            value={props.contactInfo?.phone}
                            onChange={(phone) => {
                                props.setContactInfo({
                                    ...(props.contactInfo as ContactInfo),
                                    phone,
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
        </CardHeader>
    );
};

export default CheckoutHeader;
