"use server";

import React from "react";
import { WalletOptions } from "./walletOptions";
import { useAccount, useDisconnect } from "wagmi";
export const Header = async () => {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    return (
        <div className="w-screen fixed h-[48.8px] bg-green-500">
            <WalletOptions />
            <div>
                {address && <div>{address}</div>}
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>
        </div>
    );
};
