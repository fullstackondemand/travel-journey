import { ReactNode, createContext, useContext, useState } from "react";

/** @interface ModalContextProps */
export interface ModalContextProps {
    open: boolean,
    toggleOpen: () => void,
};

/** @type {context} ModalContext */
export const ModalContext = createContext<ModalContextProps>({
    open: false,
    toggleOpen: () => { },
});


/** @function ModalContextProvider */
export const ModalContextProvider = ({ children }: { children?: ReactNode }) => {

    // Variable for open Modal
    const [open, setopen] = useState(false);

    // Method for Toogle Open Modal
    const toggleOpen = () => setopen(!open);

    return (
        <ModalContext.Provider value={{ open, toggleOpen }}>
            {children}
        </ModalContext.Provider>
    );
};


/** @function {hook} useModal */
export default function useModal() {
    return useContext(ModalContext);
}