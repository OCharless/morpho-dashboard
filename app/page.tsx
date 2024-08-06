"use client";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import {
    Table,
    TableCaption,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    TableFooter,
} from "@/components/ui/table";
import { Download, Upload } from "lucide-react";
import React from "react";

const mock: {
    vaultName: string;
    totalSupply: number;
    APY: number;
    curator: string;
    collateral: string;
}[] = [
    {
        vaultName: "Spark DAI Vault",
        totalSupply: 450098214.23,
        APY: 7.32,
        curator: "SparkDAO",
        collateral: "$450.52M",
    },
    {
        vaultName: "Steakhouse USDC",
        totalSupply: 38023246.21,
        APY: 2.66,
        curator: "Steakhouse Financial",
        collateral: "$38.06M",
    },
    {
        vaultName: "Gauntlet USDC Core",
        totalSupply: 32942584.08,
        APY: 22.33,
        curator: "Gauntlet",
        collateral: "$32.98M",
    },
    {
        vaultName: "Flagship ETH",
        totalSupply: 11176.61,
        APY: 2.05,
        curator: "Block Analitica",
        collateral: "$27.14M",
    },
    {
        vaultName: "Gauntlet USDC Prime",
        totalSupply: 20179651.02,
        APY: 2.65,
        curator: "Gauntlet",
        collateral: "$20.2M",
    },
    {
        vaultName: "Re7 WETH",
        totalSupply: 7562.33,
        APY: 5.22,
        curator: "RE7 Labs",
        collateral: "$18.37M",
    },
    {
        vaultName: "Usual Boosted USDC",
        totalSupply: 18321291.15,
        APY: 41.56,
        curator: "MEV Capital",
        collateral: "$18.34M",
    },
    {
        vaultName: "Gauntlet WETH Prime",
        totalSupply: 6952.39,
        APY: 2.15,
        curator: "Gauntlet",
        collateral: "$16.88M",
    },
    {
        vaultName: "Steakhouse PYUSD",
        totalSupply: 12195704.17,
        APY: 3.67,
        curator: "Steakhouse Financial",
        collateral: "$12.19M",
    },
    {
        vaultName: "Gauntlet WETH Core",
        totalSupply: 4084.04,
        APY: 5.7,
        curator: "Gauntlet",
        collateral: "$9.92M",
    },
];

export default function Home() {
    const [toggledNavBar, setToggledNavBar] = React.useState(true);
    return (
        <>
            <main className="bg-[#15181a] h-screen w-screen ">
                <Header />
                <div className="size-full  flex flex-col">
                    <Navbar setToggledNavBar={setToggledNavBar} toggledNavBar={toggledNavBar} />
                    <div
                        className={`${
                            toggledNavBar ? "pl-[280px]" : "pl-[80px]"
                        } pt-32 pr-12 h-full w-full overflow-x-hidden`}
                    >
                        <div className="flex justify-between mb-3 items-center">
                            <p className="text-4xl font-light text-white">Dashboard</p>
                            <div className="flex space-x-2 text-white">
                                <div className="bg-[#202426] p-4 pr-16 rounded-lg f space-y-4 flex flex-col justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Download className="w-4 text-blue-600" />
                                        <h4 className="text-xs">Total deposits</h4>
                                    </div>
                                    <p>$1 428 690 650</p>
                                </div>
                                <div className="bg-[#202426] p-4 pr-16 rounded-lg space-y-4 flex flex-col justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Upload className="w-4 text-blue-600" />
                                        <h4 className="text-xs">Total Borrow</h4>
                                    </div>
                                    <p>$535 919 214</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-12 size-full text-white ">
                            <div className="h-fit space-y-4 flex flex-col w-full pb-12">
                                <h2 className=" text-2xl">Deposits</h2>
                                <Table className="bg-[#202426] rounded-lg">
                                    <TableCaption>A list of your recent invoices.</TableCaption>
                                    <TableHeader>
                                        <TableRow className="border-[#fafafa1a]">
                                            <TableHead>Position</TableHead>
                                            <TableHead>Vault Name</TableHead>
                                            <TableHead>Total Supply</TableHead>
                                            <TableHead>Net APY</TableHead>
                                            <TableHead className="text-right">Collateral</TableHead>
                                            <TableHead className="text-right">Curator</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {mock.map((invoice) => (
                                            <TableRow
                                                key={invoice.APY}
                                                className="border-[#fafafa1a]"
                                            >
                                                <TableCell className="font-medium">
                                                    {(
                                                        (invoice.totalSupply * invoice.APY) /
                                                        100
                                                    ).toFixed(2)}
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    {invoice.vaultName}
                                                </TableCell>
                                                <TableCell>{invoice.totalSupply}</TableCell>
                                                <TableCell>{invoice.APY}</TableCell>
                                                <TableCell className="text-right">
                                                    {invoice.curator}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {invoice.collateral}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="h-fit space-y-4 flex flex-col w-full pb-12">
                                <h2 className="text-white text-2xl">Borrows</h2>
                                <Table className="bg-[#202426] rounded-lg">
                                    <TableCaption>A list of your recent invoices.</TableCaption>
                                    <TableHeader>
                                        <TableRow className="border-[#fafafa1a]">
                                            <TableHead>Position</TableHead>
                                            <TableHead>Vault Name</TableHead>
                                            <TableHead>Total Supply</TableHead>
                                            <TableHead>Net APY</TableHead>
                                            <TableHead className="text-right">Collateral</TableHead>
                                            <TableHead className="text-right">Curator</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {mock.map((invoice) => (
                                            <TableRow
                                                key={invoice.APY}
                                                className="border-[#fafafa1a]"
                                            >
                                                <TableCell className="font-medium">
                                                    {(
                                                        (invoice.totalSupply * invoice.APY) /
                                                        100
                                                    ).toFixed(2)}
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    {invoice.vaultName}
                                                </TableCell>
                                                <TableCell>{invoice.totalSupply}</TableCell>
                                                <TableCell>{invoice.APY}</TableCell>
                                                <TableCell className="text-right">
                                                    {invoice.curator}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {invoice.collateral}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
