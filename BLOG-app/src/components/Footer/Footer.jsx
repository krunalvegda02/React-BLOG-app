import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../FooterLogo";

function Footer({ child }) {
  return (
    <section
      className={`bottom-0 h-[230px] left-0 w-full py-6 overflow-hidden bg-gray-400 border border-t-2 border-gray-200 z-10 ${child}`}
    >
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="-m-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 ">
          {/* Existing Columns */}
          <div className="w-[500px] p-6 flex flex-col justify-between">
            <div className="mb-1 inline-flex items-center">
              <FooterLogo  w={270} />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                &copy; Copyright 2023. All Rights Reserved by DevUI.
              </p>
            </div>
          </div>

          <div className="w-full pl-28 p-4 pt-6">
            <div className="h-full">
              <h3 className="tracking-px mb-2 text-1xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full pl-24 p-6">
            <div className="h-full">
              <h3 className="tracking-px mb-2 text-1xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full pl-16 p-6">
            <div className="h-full">
              <h3 className="tracking-px mb-2 text-1xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* New Social Media Column */}
          <div className="w-full pl-14 p-6">
            <div className="h-full">
              <h3 className="tracking-px mb-2 text-1xs font-semibold uppercase text-gray-500">
                Social Media
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
