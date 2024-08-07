export default function Color() {
  return (
    <div className="bg-sky-700">
      <p className="w-full p-4 text-3xl text-white">Color</p>
      <div className="mb-4">
        <p className="text-blue-200 text-2xl font-bold italic text-justify">
          Email Address
        </p>
        <input
          type="email"
          className="text-gray-900 border-sky-200 border-4"
        ></input>
        <button className="btn btn-primary" style={{ textTransform: "none" }}>
          제출
        </button>
        <p className="text-rose-500">This field is required</p>
      </div>
    </div>
  );
}
