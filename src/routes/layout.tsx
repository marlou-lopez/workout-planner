import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ActivityIcon, DumbbellIcon, HomeIcon, SettingsIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  {
    title: 'Home',
    path: '/',
    icon: HomeIcon,
  },
  {
    title: 'Workouts',
    path: '/workouts',
    icon: ActivityIcon,
  },
  {
    title: 'Exercises',
    path: '/exercises',
    icon: DumbbellIcon,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: SettingsIcon,
  },
]

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
          <p className="capitalize">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function Navigation() {
  return (
    <nav className="fixed bottom-0 w-full">
      <div className="flex py-4 px-6 dark:bg-slate-950 bg-white justify-between">
        {tabs.map((tab) => {
          return (
            <NavLink to={tab.path}>
              {({ isActive }) => (
                <WithTooltip tooltipText={tab.title}>
                  <Button variant="ghost" className={isActive ? `border-b-2 border-b-current` : ''} size="icon">
                    <tab.icon className="h-[1.75rem] w-[1.75rem]" />
                  </Button>
                </WithTooltip>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default function Layout() {
  return (
    <>
      <div className="py-4 px-6">
        <Outlet />
      </div>
      <Navigation />
    </>
  )
}
