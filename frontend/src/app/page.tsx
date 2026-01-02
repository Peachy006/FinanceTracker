import { Wallet, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

export default function Home() {
    return (
        <main className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Financial Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Simple Balance Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-500">Total Balance</span>
                        <Wallet className="text-blue-500" />
                    </div>
                    <p className="text-2xl font-bold">$12,450.00</p>
                </div>
                {/* Add more cards for Income/Expense here */}
            </div>
        </main>
    );
}