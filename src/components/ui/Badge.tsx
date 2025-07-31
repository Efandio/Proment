import type React from "react";

type BadgeType = {
    label: string
    variant: "Badge1" | "Badge2" | "Badge3" | "Badge4" | "Badge5" | "Badge6"
};

const Badge: React.FC<BadgeType> = ({ label }) => {
    return (
        <div>
            {label}
        </div>
    )
};

export default Badge;