import type React from "react";


export interface ButtonInterface {
    onClick?: () => void
};

export type ButtonType = {
    label: string;
    buttonType: "submit" | "button" | "reset" ;
    size: "small" | "medium" | "large";
    variant: "primary" | "soft-primary";
};

type ButtonProps = ButtonType & ButtonInterface

const MyButton: React.FC<ButtonProps> = ({ label, buttonType, onClick }) => {
    return (
        <button type={buttonType} onClick={onClick}>
            {label}
        </button>
    )
};

export default MyButton;