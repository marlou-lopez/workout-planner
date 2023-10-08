import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ActivityIcon, DumbbellIcon, HomeIcon, SettingsIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

const NavTabs = {
  HOME: HomeIcon,
  WORKOUTS: ActivityIcon,
  EXERCISES: DumbbellIcon,
  SETTINGS: SettingsIcon
}

type WithTooltipProps = {
  children: JSX.Element;
  tooltipText: string;
}

function WithTooltip({children, tooltipText}: WithTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{tooltipText.toLowerCase()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function Navigation() {
  return (
    <nav className="fixed bottom-4 w-[calc(100%-3rem)]">
      <div className="flex justify-between">
        {Object.entries(NavTabs).map(([page, Icon]) => {
          return (
            <WithTooltip tooltipText={page}>
              <Button variant="ghost" size="icon">
                <Icon className="h-[1.75rem] w-[1.75rem]" />
              </Button>
            </WithTooltip>
          )
        })}
      </div>
    </nav>
  )
}

export default function Layout() {
  return (
    <div className="py-4 px-6">
      <Outlet />
      <Navigation />
    </div>
  )
}
