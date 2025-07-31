import type React from "react"


// Color means background color
type KanbanHeaderBadgeType = {
    label: string
    count: number
    type: "header" | "count"
    headerColor: "todo" | "in-progress" | "in-review" | "complete"
    headerCountColor: "todoCount" | "in-progressCount" | "in-reviewCount" | "completeCount"
}

const KanbanHeaderBadge: React.FC<KanbanHeaderBadgeType> = () => {
    return (
        <div>
            
        </div>
    )
}

export default KanbanHeaderBadge