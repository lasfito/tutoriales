export const VisualComponent = ({ title = "Component", metodo, children }) => {
  return (
    <div
      className={`component bg-gray-800 rounded text-white p-4 border-2 border-gray-400 relative mt-4`}
    >
      <span
        key={Math.random()}
        className="rerender absolute left-3 top-2 text-xs uppercase font-bold text-red-500"
      >
        Render
      </span>
      <div className="flex  flex-row">
        <h2 className="mt-2 font-bold text-lg mb-1">{title}</h2>
        {metodo && (
          <h2 className="mt-2 font-thin text-lg mb-4 text-teal-400">
            -{metodo}
          </h2>
        )}
      </div>
      {children}
    </div>
  );
};

export const Button = (props) => {
  return (
    <button
      className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm"
      {...props}
    />
  );
};

export const LabeledBox = ({ label, children }) => {
  return (
    <div>
      <div>{label}</div>
      {children}
    </div>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className="p-6 bg-gray-800 min-h-screen text-white">
      <div className="max-w-2xl mx-auto">
        <header className="text-center">
          <h1 className="text-center font-bold text-2xl mb-4 md:text-4xl md:mt-6">
            Optimización de React
          </h1>
          <p className="mb-8 leading-tight">
            Cómo evitar renderizados innecesarios
          </p>
        </header>
        {children}
      </div>
    </div>
  );
};
