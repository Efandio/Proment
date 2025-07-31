import type React from "react";

type KanbanCardType = {
    date: Date;
    title: string;
    badge?: React.ReactNode;       // Optional: means user can put the badge or not
    description: string;
    option: "delete" | "update"
    isCardClicked: boolean;
}

const KanbanCard: React.FC<KanbanCardType> = () => {
    return (
        <div>

        </div>
    )
}

export default KanbanCard