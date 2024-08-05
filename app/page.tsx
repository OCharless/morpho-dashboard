import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { config } from "@/context/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

export default function Home() {
    const queryClient = new QueryClient();
    return (
        <>
            <main className="bg-[#15181a] h-screen w-screen grid">
                <WagmiProvider config={config}>
                    <QueryClientProvider client={queryClient}>
                        <Header />
                        <Navbar />
                    </QueryClientProvider>
                </WagmiProvider>
            </main>
        </>
    );
}
