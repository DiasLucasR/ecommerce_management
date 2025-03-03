import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      action: "imported",
      resource: "Product Catalog",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JS",
      },
      action: "updated",
      resource: "Customer Data",
      time: "3 hours ago",
    },
    {
      id: 3,
      user: {
        name: "Mike Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MJ",
      },
      action: "processed",
      resource: "Sales Analytics",
      time: "5 hours ago",
    },
    {
      id: 4,
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
      action: "created",
      resource: "Inventory Report",
      time: "1 day ago",
    },
    {
      id: 5,
      user: {
        name: "David Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DB",
      },
      action: "exported",
      resource: "Marketing Data",
      time: "1 day ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name} <span className="text-muted-foreground">{activity.action}</span> {activity.resource}
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

