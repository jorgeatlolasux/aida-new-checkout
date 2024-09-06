import React from "react";
import { Card, CardContent } from "../ui/card";
import { ArrowLeft, VerifiedCheck } from "solar-icon-set";
import { Button } from "../ui/button";
import { CardInfo, CommercesWithCashPayment, Selection } from "./types";
import { useToast } from "@/hooks/use-toast";
import { Input } from "../ui/input";
import Image from "next/image";

interface CheckoutContentProps {
    selection: Selection;
    total: number;
    cardInfo?: CardInfo;
    setCardInfo?: (cardInfo: CardInfo) => void;
    selectedCommerceWithCashPayment?: CommercesWithCashPayment;
    setSelectedCommerceWithCashPayment?: (
        commerce: CommercesWithCashPayment
    ) => void;
}

const PaymentWithTransfer = ({ total }: { total: number }) => {
    const { toast } = useToast();

    return (
        <div className="flex flex-col">
            <ol className="list-decimal space-y-3 text-xs text-gray-500">
                <li>
                    En tu App bancaria busca la opción “transferir”,
                    “transferencia” o “enviar dinero” e ingresa la cuenta CLABE
                    de abajo.
                </li>
                <li>Transfiere el monto exato de pago</li>
                <li>Realiza la transferencia</li>
            </ol>

            <div className="mt-5 font-bold text-3xl flex items-center justify-center">
                <h1>${total} MX</h1>
            </div>
            <div className="space-y-2 mt-4">
                <h1 className="text-sm text-gray-500">Cuenta CLABE</h1>
                <div className="bg-[#F0F0F0] p-2 text-center relative shadow-md">
                    <VerifiedCheck
                        className="absolute top-1/2 transform -translate-y-1/2 left-1"
                        color="#FF4C12"
                        iconStyle="Bold"
                        size={24}
                    />
                    {/* todo: change to a real CLABE */}
                    <h1 className=" text-bold text-sm" id="CLABE">
                        01234567890123456
                    </h1>
                </div>
                <div className="text-center">
                    <Button
                        variant={"link"}
                        className="font-semibold text-blue-500"
                        onClick={() => {
                            navigator.clipboard.writeText(
                                document.getElementById("CLABE")?.textContent ||
                                    ""
                            );
                            toast({
                                title: "Link copiado",
                                description:
                                    "La CLABE ha sido copiada al portapapeles",
                            });
                        }}
                    >
                        Copiar CLABE
                    </Button>
                </div>
            </div>
        </div>
    );
};

interface PaymentWithCardProps {
    cardInfo: CardInfo;
    setCardInfo: (cardInfo: CardInfo) => void;
}
const PaymentWithCard = ({ cardInfo, setCardInfo }: PaymentWithCardProps) => {
    const handleCardExpiration = (value: string) => {
        if (value.indexOf(".") >= 0 || value.length > 4) {
            return value.slice(0, 5);
        }
        if (value.length === 2 && value.indexOf("/") === -1) {
            value += "/";
        }
        return value;
    };

    return (
        <>
            <div className="mt-2">
                <h1 className="text-sm text-gray-600">
                    Información de la tarjeta
                </h1>

                <Input
                    className="rounded-b-none border-b-none"
                    placeholder="XXXX XXXX XXXX XXXX"
                    type="number"
                    onChange={(e) => {
                        if (e.target.value.length > 19) {
                            e.target.value = e.target.value.slice(0, 19);
                        }
                        setCardInfo({
                            ...cardInfo,
                            cardNumber: e.target.value,
                        });
                    }}
                />
                <div className="flex">
                    <Input
                        onChange={(e) => {
                            if (e.target.value) {
                                e.target.value = handleCardExpiration(
                                    e.target.value
                                );
                            }
                            setCardInfo({
                                ...cardInfo,
                                expirationDate: e.target.value,
                            });
                        }}
                        className="w-1/2 rounded-t-none border-t-none"
                        placeholder="MM/YY"
                    />
                    <Input
                        onChange={(e) => {
                            if (e.target.value.length > 3) {
                                e.target.value = e.target.value.slice(0, 3);
                            }
                            setCardInfo({
                                ...cardInfo,
                                cvv: e.target.value,
                            });
                        }}
                        className="w-1/2 rounded-t-none border-t-none"
                        placeholder="CVV"
                        type="number"
                    />
                </div>
            </div>

            <div className="mt-4">
                <h1 className="text-sm text-gray-600">
                    Nombre del titular de tarjeta
                </h1>

                <Input
                    placeholder="Nombre completo"
                    type="number"
                    onChange={(e) => {
                        setCardInfo({
                            ...cardInfo,
                            owner: e.target.value,
                        });
                    }}
                />
            </div>
        </>
    );
};

interface PaymentWithCashProps {
    selectedCommerceWithCashPayment: CommercesWithCashPayment;
    setSelectedCommerceWithCashPayment: (
        commerce: CommercesWithCashPayment
    ) => void;
}
const PaymentWithCash = ({
    selectedCommerceWithCashPayment,
    setSelectedCommerceWithCashPayment,
}: PaymentWithCashProps) => {
    // type for the Commerces array
    type CommercesWithCash = {
        id: number;
        name: CommercesWithCashPayment;
        icon: string;
    };

    const Commerces: CommercesWithCash[] = [
        {
            id: 1,
            name: "Oxxo",
            icon: "/oxxo.svg",
        },
        {
            id: 2,
            name: "7Eleven",
            icon: "/seven-eleven.svg",
        },
        {
            id: 3,
            name: "Walmart",
            icon: "/walmart.svg",
        },
        {
            id: 4,
            name: "Chedraui",
            icon: "/chedraui.svg",
        },
        {
            id: 5,
            name: "Farmacias del Ahorro",
            icon: "farmacias-del-ahorro.svg",
        },
        {
            id: 6,
            name: "Soriana",
            icon: "soriana.svg",
        },
        {
            id: 7,
            name: "Bodega Aurrera",
            icon: "bodega-aurrera.svg",
        },
        {
            id: 8,
            name: "Circle K",
            icon: "circle-k.svg",
        },
        {
            id: 9,
            name: "Kiosko",
            icon: "kiosko.svg",
        },
    ];

    return (
        <>
            {!selectedCommerceWithCashPayment ? (
                <div className="grid grid-cols-3 gap-4">
                    {Commerces.map((commerce) => (
                        <div
                            key={commerce.id}
                            className={`flex flex-col items-center justify-center p-4 aspect-square  rounded-md border ${
                                selectedCommerceWithCashPayment ===
                                commerce.name
                                    ? "border-orange-600"
                                    : "border-gray-300"
                            }`}
                            onClick={() => {
                                setSelectedCommerceWithCashPayment(
                                    commerce.name
                                );
                            }}
                        >
                            <Image
                                src={commerce.icon}
                                alt={commerce.name}
                                width={80}
                                height={80}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <Card className="relative">
                        {/* icon on top with a list bellow with 3 items  of text*/}

                        {/* backarrow */}
                        <div className="absolute top-4 left-4">
                            <Button
                                variant="link"
                                className="text-gray-500"
                                onClick={() => {
                                    setSelectedCommerceWithCashPayment(
                                        undefined as unknown as CommercesWithCashPayment
                                    );
                                }}
                            >
                                <ArrowLeft iconStyle="Linear" />
                            </Button>
                        </div>

                        <div className="flex flex-col items-center  h-[300px] mt-5">
                            <Image
                                src={
                                    Commerces.find(
                                        (commerce) =>
                                            commerce.name ===
                                            selectedCommerceWithCashPayment
                                    )?.icon as string
                                }
                                alt={selectedCommerceWithCashPayment}
                                width={80}
                                height={80}
                            />

                            <ol className="list-decimal ml-10 mt-5 space-y-2">
                                <li>
                                    Toma una captura de pantalla del código de
                                    barras.
                                </li>
                                <li>
                                    Ve a una sucursal de{" "}
                                    {selectedCommerceWithCashPayment}.
                                </li>
                                <li>
                                    Enséñale el código de barras o díctale la
                                    referencia al cajero.
                                </li>
                            </ol>
                            <div className="w-3/4  text-center justify-center flex  items-center  h-14 mt-5 bg-gray-300 rounded-sm font-bold">
                                <h1>CODIGOS DE BARRAS</h1>
                            </div>
                            <h1 className="text-gray-400 mt-2">Referencia: </h1>
                        </div>

                        <div className="flex justify-between p-3 text-xs text-gray-500">
                            <h1>Tiempo de vida del código</h1>
                            <h1>tiempo</h1>
                        </div>
                    </Card>
                </>
            )}
        </>
    );
};

const CheckoutContent = (props: CheckoutContentProps) => {
    const PaymentText = () => {
        if (props.selection === "transfer") {
            return "pagar con transferencia";
        } else if (props.selection === "card") {
            return "pagar con tarjeta";
        } else if (props.selection === "cash") {
            return "pagar con efectivo";
        }
    };

    return (
        <CardContent className="mt-4">
            {/* line */}
            <div className="flex items-center space-x-5">
                <div className="w-1/2 h-[1px] bg-orange-600"></div>
                <h1 className="text-gray-500 text-sm whitespace-nowrap">
                    {PaymentText()}
                </h1>
                <div className="w-1/2 h-[1px] bg-orange-600"></div>
            </div>

            {/* content */}
            <div className="mt-4">
                {props.selection === "transfer" && (
                    <PaymentWithTransfer total={props.total} />
                )}
                {props.selection === "card" && (
                    <PaymentWithCard
                        cardInfo={props.cardInfo!}
                        setCardInfo={props.setCardInfo!}
                    />
                )}
                {props.selection === "cash" && (
                    <PaymentWithCash
                        selectedCommerceWithCashPayment={
                            props.selectedCommerceWithCashPayment!
                        }
                        setSelectedCommerceWithCashPayment={
                            props.setSelectedCommerceWithCashPayment!
                        }
                    />
                )}
            </div>
        </CardContent>
    );
};

export default CheckoutContent;
