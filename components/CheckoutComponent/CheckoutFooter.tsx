import React from "react";
import { CardFooter } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const CheckoutFooter = () => {
    return (
        <CardFooter>
            <div className="flex flex-col space-y-3  items-center justify-center w-full">
                <div className="flex items-center justify-center space-x-1">
                    <h1 className="text-[10px] text-gray-500">
                        Tu también cobra con
                    </h1>
                    <Image src="/aida.svg" width={30} height={10} alt="aida" />
                </div>
                <div className="flex space-x-4">
                    <Image
                        src="/verified-visa.svg"
                        width={30}
                        height={10}
                        alt="aida"
                    />
                    <Image
                        src="/mastercard-securecode.svg"
                        width={30}
                        height={10}
                        alt="aida"
                    />
                    <Image
                        src="/amex-safe-key.svg"
                        width={30}
                        height={10}
                        alt="aida"
                    />
                </div>
                <div className="flex  ">
                    <Link
                        href="/terms"
                        className={cn(
                            buttonVariants({ variant: "link" }),
                            "text-[10px] text-gray-500"
                        )}
                    >
                        <h1>Condiciones</h1>
                    </Link>
                    <Link
                        href="/privacy"
                        className={cn(
                            buttonVariants({ variant: "link" }),
                            "text-[10px] text-gray-500"
                        )}
                    >
                        <h1>Privacidad</h1>
                    </Link>
                </div>
            </div>
        </CardFooter>
    );
};

export default CheckoutFooter;
