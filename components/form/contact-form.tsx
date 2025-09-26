// components/form/contact-form.tsx
export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            required
            className="w-full h-12 rounded-lg border border-gray-300 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            required
            type="email"
            className="w-full h-12 rounded-lg border border-gray-300 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <input className="w-full h-12 rounded-lg border border-gray-300 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          required
          rows={5}
          className="w-full rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
