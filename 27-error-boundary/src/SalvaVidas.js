import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tieneError: false, mensajeError: "" };
  }

  static getDerivedStateFromError(error) {
    // Método 1
    return { tieneError: true, mensajeError: error.message };
  }

  componentDidCatch(error) {
    // Método 2
    // Ambos sirven por igual
    console.log("Component did catch:", error.message);
  }

  render() {
    if (this.state.tieneError) {
      // "UI de emergencia"
      return (
        <div className="px-4 py-2 m-4">
          <h1 className="mt-2 font-bold text-lg mb-1">Hubo un error:</h1>
          <p> {this.state.mensajeError} </p>
          <button
            className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm"
            onClick={() => (window.location.href = "/")}
          >
            Recargar la página{" "}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
