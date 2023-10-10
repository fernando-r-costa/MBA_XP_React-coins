export default function ControlePagina({ children }: any) {
  return (
    <div className="bg-transparent border-solid border-2 border-black rounded p-2">
      <button>{children}</button>
    </div>
  );
}
