import { RoutesApp } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";


export const App = () => {
  return (
    <div className="App">
      <UsuarioLogadoProvider>
        <RoutesApp />
      </UsuarioLogadoProvider>
    </div>
  );
}

