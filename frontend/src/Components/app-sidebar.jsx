import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  useSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,

} from "@/components/ui/sidebar"
import logo from '@/assets/logo.svg'
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Models",
      url: "/app/chat",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    }],
}

export function AppSidebar({
  ...props
}) {
  const {toggleSidebar,setOpen} = useSidebar();
  return (
    (<Sidebar collapsible="icon" {...props} className='bg-black' onClick={toggleSidebar} >
      <SidebarHeader className='bg-black'>
        <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild >
                <a href="/app">
                  <div className="flex aspect-square size-8  items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                    <img src={logo} alt="CareerShepherds" className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col gap-0.5  leading-none">
                    <span className="">CareerShepherds</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='bg-black'>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter onMouseEnter={{}} onMouseLeave={{}} className='bg-black'>
        <NavUser user={data.user}/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
