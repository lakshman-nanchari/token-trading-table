"use client";

import {ReactNode, useState} from "react";
import {Provider} from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {store} from "@/store";

export default function Providers({children}: {children: ReactNode}){
     const [queryClient] = useState(() => new QueryClient());

     return(
        <Provider store={store}>
            <QueryClientProvider client={queryClient} >
                {children}
            </QueryClientProvider>
        </Provider>
     );
}