"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React, { useState } from "react";

export default function AccordionSection() {
  const [image, setImage] = useState(
    "https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Features/02_Notifications"
  );

  return (
    <section className="w-full bg-white flex items-center justify-center rounded-b-[40px]">
      <div className="grid grid-cols-2 items-center justify-center max-w-[1300px] w-full gap-28 py-28 px-12">
        <Accordion
          type="single"
          collapsible
          onValueChange={(e) => setImage(e)}
          defaultValue="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Features/02_Notifications"
        >
          <AccordionItem value="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Features/02_Notifications">
            <AccordionTrigger>Make it your own</AccordionTrigger>
            <AccordionContent>
              With communities, 1on1 chats, wallet accounts and dApps, there is
              a lot going on! Stay in control with a global notification centre
              that lets you see at a glance everything that’s happening in your
              web3 world.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Features/03_Make_it_Your_Own">
            <AccordionTrigger>Jump between tasks</AccordionTrigger>
            <AccordionContent>
              Customize your Status! Pick an avatar and colour to represent
              yourself, choose from light or dark mode, pick emojis to represent
              your accounts, and see the app will take on the character of the
              communities you join.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1920,q_auto/Homepage/Screens/Features/04_Multiple_Profiles">
            <AccordionTrigger>Track your notifications</AccordionTrigger>
            <AccordionContent>
              Different online identities? Or sharing a device with family or
              friends? Not a problem, Status fully supports switching between
              multiple fully independent identities.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="relative w-full py-14 px-24 flex items-center justify-center bg-slate-400 rounded-3xl">
          <Image
            className="rounded-3xl"
            height={2557}
            width={1663}
            src={image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
