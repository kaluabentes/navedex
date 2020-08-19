import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";

interface State {
  ready: boolean;
  token: string | undefined;
}

interface UserProviderProps {
  children: ReactNode;
}

export type Dispatch = (payload: State) => void;

const INITIAL_STATE = { ready: false, token: undefined };

const UserStateContext = createContext<State>(INITIAL_STATE);
const UserDispatchContext = createContext<Dispatch | undefined>(undefined);

export function UserProvider({ children }: UserProviderProps) {
  const [state, setState] = useState<State>(INITIAL_STATE);

  useEffect(() => {
    const persistedState = localStorage.getItem("user");

    if (persistedState) {
      setState({ ...JSON.parse(persistedState), ready: true });
    } else {
      setState({ ...INITIAL_STATE, ready: true });
    }
  }, []);

  function dispatch(payload: State) {
    const nextState = { ...state, ...payload };

    localStorage.setItem("user", JSON.stringify(nextState));
    setState(nextState);
  }

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUserContext(): any {
  const state = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);

  if (state === undefined || dispatch === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return [state, dispatch] as const;
}
