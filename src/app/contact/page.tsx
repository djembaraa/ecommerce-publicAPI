import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight text-black mb-4">Get in <span className="font-bold">Touch</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you have a question about our products, need beauty advice, or want to partner with us, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow">
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow resize-none" placeholder="How can we help you today?"></textarea>
              </div>
              <button type="button" className="w-full bg-black text-white font-medium py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-light mb-8">Contact <span className="font-bold">Information</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center mt-1">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-black mb-1">Our Studio</h3>
                  <p className="text-gray-600 leading-relaxed">
                    123 Beauty Boulevard, Suite 400<br />
                    Beverly Hills, CA 90210<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center mt-1">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-black mb-1">Call Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    +1 (800) 123-4567<br />
                    <span className="text-sm text-gray-400">Toll-free across North America</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center mt-1">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-black mb-1">Email Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    hello@cyberbeauty.com<br />
                    support@cyberbeauty.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center mt-1">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-black mb-1">Business Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                    Saturday: 10:00 AM - 4:00 PM (PST)<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
