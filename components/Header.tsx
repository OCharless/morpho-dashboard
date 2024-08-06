"use client";

import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ChevronDownIcon } from "lucide-react";

export const Header = () => {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { connectors, connect } = useConnect();
    return (
        <div className="w-screen z-10 bg-[#15181a] fixed flex h-[48.8px] justify-end items-center border-b-[1px] border-[#fafafa1a]">
            <div className="w-fit h-fit space-x-2 flex  mr-9">
                <div className="bg-[#fafafa1a] flex h-fit rounded-sm px-1">
                    o
                    <ChevronDownIcon className="text-white w-4" />
                </div>
                {address && (
                    <button
                        className="text-xs text-white bg-blue-700 p-1 rounded-sm h-fit w-fit"
                        onClick={() => disconnect()}
                    >
                        Disconnect
                    </button>
                )}
                {address === undefined && (
                    <button className="text-xs text-white bg-blue-700 p-1 rounded-sm h-fit w-fit">
                        Connect wallet
                    </button>
                )}
            </div>
        </div>
    );
};
