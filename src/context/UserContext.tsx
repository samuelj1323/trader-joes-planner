import { createContext, useState, ReactNode } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({});
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider value={{ state, setState, cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
