"use client"

import Link from 'next/link'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

 
export default function Menu() {
    
    return (
    
        <section className = "mr-8">
        <Menubar>
        <MenubarMenu>
            <MenubarTrigger>login</MenubarTrigger>
            <MenubarContent>
            <MenubarItem>
                <Link href = "/sign-in">
                    Sign In <MenubarShortcut>⌘T</MenubarShortcut>
                </Link>
            </MenubarItem>
            <MenubarItem>
                <Link href = "/sign-up">
                Sign Up <MenubarShortcut>⌘N</MenubarShortcut>
                </Link>
     </MenubarItem>
            </MenubarContent>

            
            {/* <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem> */}
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>search</MenubarTrigger>
            <MenubarContent>
            <MenubarItem>
                <Link href = "/character">
                 Character <MenubarShortcut>⌘Z</MenubarShortcut>
                </Link>
            </MenubarItem>
            <MenubarItem>
                Kage <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
                <MenubarSubTrigger>Arc</MenubarSubTrigger>
                <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Manga</MenubarItem>
            <MenubarItem>History</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>chat</MenubarTrigger>
            <MenubarContent>
            <MenubarCheckboxItem>Private Chat</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
                Discord Chat
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarCheckboxItem>Unreal debate Chat</MenubarCheckboxItem> 
            {/* <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem> */}
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Whats new?</MenubarTrigger>
            <MenubarContent>
                <MenubarItem >Kishimoto Updates</MenubarItem>
                <MenubarItem >Shonen Jump News</MenubarItem>
                <MenubarItem >Animecon News</MenubarItem>
            {/* <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup> */}
            {/* <MenubarSeparator /> */}
            {/* <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem> */}
            </MenubarContent>
        </MenubarMenu>
        </Menubar>

    </section>

    )
        
}

