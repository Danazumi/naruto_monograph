import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"



export default function NavMenu() {

    return (
        <section className="mr-8">

            <NavigationMenu>
            <NavigationMenuList>

                <NavigationMenuItem className="">
                <Link href="/loginz" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Chat
                </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>


                <NavigationMenuItem>
                <Link href="/character" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Search
                </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
                </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>

            </NavigationMenuList>
            </NavigationMenu>


        </section>
    )
}