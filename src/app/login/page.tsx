export default function LoginPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:ring-black focus:border-black" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:ring-black focus:border-black" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-gray-600 hover:text-black">Forgot your password?</a>
            </div>
          </div>
          <button type="button" className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 font-medium transition-colors">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
