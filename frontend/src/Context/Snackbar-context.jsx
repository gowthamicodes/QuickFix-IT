import { createContext, useState} from "react";

export const SnackbarContext = createContext();

export function SnackbarProvider({ children}) {

const [snackbarMessage, setSnackbarMessage] = useState("");


return (

<SnackbarContext.Provider        
value={{ snackbarMessage, setSnackbarMessage }}
>
{children}
</SnackbarContext.Provider>

)

}