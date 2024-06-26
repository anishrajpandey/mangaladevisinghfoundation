"use client";

import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container className="h-[60vh] bg-gray-200 mt-28">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <h2 className="font-bold text-gray-700">
            Mangala Devi Singh Foundation
          </h2>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="Mangala Devi Singh Foundation™"
          year={2024}
        />
      </div>
    </Footer>
  );
}
