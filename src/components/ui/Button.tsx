import type React from "react";


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

const MyButton: React.FC<ButtonProps> = ({ children, buttonType, onClick }) => {
    return (
        <button type={buttonType} onClick={onClick} className={``}>
            {children}
        </button>
    )
};

export default MyButton;