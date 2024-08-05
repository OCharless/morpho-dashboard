/* eslint-disable @next/next/no-img-element */
"use client";
import {
    ChartAreaIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    LayoutDashboardIcon,
    SunIcon,
    TableIcon,
} from "lucide-react";
import React from "react";

export const Navbar = () => {
    const [toggledNavBar, setToggledNavBar] = React.useState(true);
    if (toggledNavBar)
        return (
            <div
                className={`h-screen flex bg-[#202426] px-[10px] justify-between  flex-col w-[250px]`}
            >
                <div className="space-y-1 flex-nowrap text-[#fffffff2]">
                    <img src="butterfly-dark.svg" alt="" className="px-3 py-4" />
                    <button className="flex space-x-2 hover:bg-[#fafafa1a] items-center text-sm w-full py-2 rounded-md px-3">
                        <img src="earn-icon.svg" alt="" className="w-4" />
                        <p>Earn</p>
                    </button>
                    <button className="flex space-x-2 hover:bg-[#fafafa1a] items-center text-sm w-full py-2 rounded-md px-3">
                        <img src="borrow-icon.svg" alt="" className="w-4" />
                        <p>Borrow</p>
                    </button>
                    <button className="flex space-x-2 hover:bg-[#fafafa1a] items-center text-sm w-full py-2 rounded-md px-3">
                        <img src="migrate-icon.svg" alt="" className="w-4" />
                        <p>Migrate</p>
                    </button>
                    <button className="flex space-x-2 hover:bg-[#fafafa1a] items-center text-sm w-full py-2 rounded-md px-3">
                        <img src="ecosystem-icon.svg" alt="" className="w-4" />
                        <p>Ecosystem</p>
                    </button>
                    <button className="flex space-x-2 hover:bg-[#fafafa1a] items-center text-sm w-full py-2 rounded-md px-3 bg-[#fafafa1a]">
                        <LayoutDashboardIcon className="w-4" />
                        <p>Dashboard</p>
                    </button>
                </div>
                <div className="text-[#ffffff80] h-full m-2 flex flex-col justify-end">
                    <div className="flex space-x-2 items-center">
                        <LayoutDashboardIcon className="w-4" />
                        <a className="text-sm" href="">
                            Analytics
                        </a>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <LayoutDashboardIcon className="w-4" />

                        <a className="text-sm" href="">
                            Morpho docs
                        </a>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <LayoutDashboardIcon className="w-4" />
                        <a className="text-sm" href="">
                            Morpho Optimizers
                        </a>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <LayoutDashboardIcon className="w-4" />
                        <a className="text-sm" href="">
                            Feedback
                        </a>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <LayoutDashboardIcon className="w-4" />
                        <a className="text-sm" href="">
                            Terms of Use
                        </a>
                    </div>
                    <div className="mt-2 flex space-x-2 items-center">
                        <button
                            onClick={() => setToggledNavBar(!toggledNavBar)}
                            className="text-white p-2 rounded-md"
                        >
                            <ChevronLeftIcon className="w-4" />
                        </button>
                        <SunIcon className="w-4" />
                    </div>
                </div>
            </div>
        );
    if (!toggledNavBar)
        return (
            <div
                className={`h-screen flex bg-[#202426] px-[5px] justify-between  flex-col w-[52px]`}
            >
                <div className="space-y-2 flex-nowrap flex flex-col items-center">
                    <img src="butterfly-dark.svg" alt="" className="px-1 py-5" />
                    <button className="flex space-x-2 items-center text-[#fffffff2] text-sm w-full py-1 rounded-md px-3">
                        <img src="earn-icon.svg" alt="" className="w-4" />
                    </button>
                    <button className="flex space-x-2 items-center text-[#fffffff2] text-sm w-full py-1 rounded-md px-3">
                        <img src="borrow-icon.svg" alt="" className="w-4" />
                    </button>
                    <button className="flex space-x-2 items-center text-[#fffffff2] text-sm w-full py-1 rounded-md px-3">
                        <img src="migrate-icon.svg" alt="" className="w-4" />
                    </button>
                    <button className="flex space-x-2 items-center text-[#fffffff2] text-sm w-full py-1 rounded-md px-3">
                        <img src="ecosystem-icon.svg" alt="" className="w-4" />
                    </button>
                    <button className="flex space-x-2 items-center text-[#fffffff2] text-sm w-full py-1 rounded-md px-3 bg-[#fafafa1a]">
                        <LayoutDashboardIcon className="w-4" />
                    </button>
                </div>
                <div className="">
                    <button
                        onClick={() => setToggledNavBar(!toggledNavBar)}
                        className="text-white p-2 rounded-md w-full"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        );
};
