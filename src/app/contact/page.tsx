export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="max-w-md mx-auto w-full">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"></textarea>
          </div>
          <button type="button" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
