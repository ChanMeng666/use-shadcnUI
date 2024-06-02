import React from 'react';

// import * as React from "react"

import { cn } from "@/lib/utils"
import Logo from "@/assets/CHAN_logo_black.svg"
import profileImage from "@/assets/CHAN_image.svg"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Swimming Club",
    href: "https://groupaq.pythonanywhere.com/",
    description:
      "Countryside community swimming club management system.",
  },
  {
    title: "Biosecurity",
    href: "http://1160210.pythonanywhere.com/",
    description:
      "Informational app on NZ agricultural pests and weeds.",
  },
  {
    title: "Fishing Club",
    href: "http://groupac.pythonanywhere.com/",
    description:
      "East Coast anglers club management system.",
  },
  {
    title: "Automotive",
    href: "http://chanmeng.pythonanywhere.com/",
    description:
      "Streamlined auto repair and billing application.",
  },
]



function Header() {
  return (
      <header className="flex items-center h-20">
        <a href="/" className="flex-shrink-0">
          <img src={Logo} alt="" className="w-20 h-20"/>
        </a>
        <div className="flex-grow flex justify-center text-left">
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-no-repeat bg-cover p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                            style={{
                              backgroundImage: `url(${profileImage})`,
                            }}
                        >
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Expertise" className="">
                      Fluent in multiple development tools.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Multilingual" className="">
                      Communicates in four languages effectively.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Efficiency" className="">
                      Minimalism for productive coding.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Autodidact" className="">
                      Proven ability in learning independently.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Innovation" className="">
                      Creative in problem-solving and education.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Project</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] lg:w-[500px] ">
                    {components.map((component) => (
                        <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                        >
                          {component.description}
                        </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex-shrink-0 w-20 h-20" />
      </header>

  );
}


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"





export default Header;