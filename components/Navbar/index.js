export default function Navbar() {
  return (
    <nav>
      <div className="container my-5 flex justify-center ">
        <input
          type="text"
          className="placeholder-shown:border-gray-500 w-1/4 h-10 border rounded-lg p-4"
          placeholder="you@example.com"
        />
      </div>
    </nav>
  );
}
