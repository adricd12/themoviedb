import { store } from "@/redux/store"
import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux"

const wrapper =  ({children}: {children: JSX.Element}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>);
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, {wrapper, ...options});

export { customRender as render };