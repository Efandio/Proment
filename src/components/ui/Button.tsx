import React, { useState } from "react";


export interface ButtonInterface {
    onClick?: () => void
};

export type ButtonType = {
    children: React.ReactNode;
    buttonType: "submit" | "button" | "reset" ;
    size: "small" | "medium" | "large";
    variant: "primary" | "soft-primary";
};

type ButtonProps = ButtonType & ButtonInterface

const MyButton: React.FC<ButtonProps> = ({ children, buttonType, size, variant, onClick }) => {

    const variantClasses: Record<ButtonProps["variant"], string> = {
        primary: "bg-PrimaryLight hover:bg-PrimaryLight/80",
        "soft-primary": "bg-SoftPrimary hover:bg-SoftPrimary/80"
    }

    const sizeClasses: Record<ButtonProps["size"], string> = {
        small: "px-4 py-0.5 text-xs",
        "medium": "px-8 py-1",
        "large": "px-12 py-1 text-xl",
    }

    return (
        <button type={buttonType} onClick={onClick} className=
        {`cursor-pointer rounded-md text-TextColorLightMode ${variantClasses[variant]} ${sizeClasses[size]}`}
        >
            {children}
        </button>
    )
};

export default MyButton;