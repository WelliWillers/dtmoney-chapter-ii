import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProps {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TransactionContextData {
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInput) => Promise<void>; 
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({children}: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, [])

    async function createTransaction(transactionsInput: TransactionInput){
        const response = await api.post('/transactions', {...transactionsInput, createdAt: new Date()});
        const { transaction } = response.data;

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionContext);

    return context;
}