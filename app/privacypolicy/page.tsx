export default function PrivacyPolicy() {
  const sections = [
    {
      number: "01",
      title: "Introduction",
      content: `Welcome to Kaleem Sons. We are a men's clothing brand based in Pakistan. Your privacy matters to us, and this policy explains how we collect, use, and protect your personal information when you shop with us.`,
      list: null,
    },
    {
      number: "02",
      title: "Information We Collect",
      content: "When you use our website or place an order, we may collect:",
      list: [
        { label: "Personal details", desc: "Your name, email address, and phone number" },
        { label: "Delivery information", desc: "Your shipping address and city" },
        { label: "Order details", desc: "Items purchased, order history, and payment method" },
        { label: "Account information", desc: "If you sign up or log in via Google or email" },
        { label: "Technical data", desc: "Your IP address, browser type, and device info" },
      ],
    },
    {
      number: "03",
      title: "How We Use Your Information",
      content: "We use your information to:",
      list: [
        { label: "", desc: "Process and deliver your orders" },
        { label: "", desc: "Send order confirmations and updates via email or WhatsApp" },
        { label: "", desc: "Manage your account and login" },
        { label: "", desc: "Respond to your queries or return requests" },
        { label: "", desc: "Improve our website and shopping experience" },
        { label: "", desc: "Send promotional offers (only if you opt in)" },
      ],
    },
    {
      number: "04",
      title: "Payment Information",
      content: `Kaleem Sons accepts Cash on Delivery (COD) and manual bank transfer. We do not store your banking or card details on our servers. All payment-related data is handled securely and is never shared with third parties for marketing purposes.`,
      list: null,
    },
    {
      number: "05",
      title: "Sharing Your Information",
      content: "We do not sell your personal data. We may share it only with:",
      list: [
        { label: "Courier/delivery services", desc: "To fulfill your order" },
        { label: "Third-party login providers", desc: "Such as Google, if you use Google Sign-In" },
        { label: "Legal authorities", desc: "If required by Pakistani law" },
      ],
    },
    {
      number: "06",
      title: "Data Storage & Security",
      content: `Your data is stored securely using industry-standard practices. We take reasonable steps to protect your information from unauthorized access, loss, or misuse. However, no online platform can guarantee 100% security.`,
      list: null,
    },
    {
      number: "07",
      title: "Cookies",
      content: `Our website may use cookies to keep you logged in, remember your cart items, and analyze website traffic. You can disable cookies in your browser settings, but some features may not work properly.`,
      list: null,
    },
    {
      number: "08",
      title: "Your Rights",
      content: "You have the right to:",
      list: [
        { label: "", desc: "Access the personal data we hold about you" },
        { label: "", desc: "Request correction of incorrect information" },
        { label: "", desc: "Request deletion of your account and data" },
        { label: "", desc: "Opt out of marketing emails at any time" },
      ],
    },
    {
      number: "09",
      title: "Children's Privacy",
      content: `Our website is not intended for children under the age of 13. We do not knowingly collect data from minors.`,
      list: null,
    },
    {
      number: "10",
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our website means you accept the updated policy.`,
      list: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Kaleem Sons</p>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Effective: April 15, 2025 &nbsp;·&nbsp; Last Updated: April 15, 2025</p>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        {sections.map((section, i) => (
          <div key={i} className="border-b border-gray-100 pb-10">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-xs font-medium text-gray-300 mt-1 w-6 shrink-0">{section.number}</span>
              <h2 className="text-base font-semibold text-gray-900">{section.title}</h2>
            </div>

            <div className="ml-10">
              {section.content && (
                <p className="text-sm text-gray-600 leading-7 mb-3">{section.content}</p>
              )}

              {section.list && (
                <ul className="space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-6">
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                      <span>
                        {item.label && (
                          <span className="font-medium text-gray-700">{item.label} — </span>
                        )}
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        {/* Contact */}
        <div className="border-b border-gray-100 pb-10">
          <div className="flex items-start gap-4 mb-3">
            <span className="text-xs font-medium text-gray-300 mt-1 w-6 shrink-0">11</span>
            <h2 className="text-base font-semibold text-gray-900">Contact Us</h2>
          </div>
          <div className="ml-10 space-y-1 text-sm text-gray-600">
            <p>If you have any questions about this Privacy Policy, please reach out:</p>
            <div className="mt-4 space-y-2">
              <p>📍 <span className="text-gray-500">Pakistan</span></p>
              <p>📧 <span className="text-gray-500">your@email.com</span></p>
              <p>📱 <span className="text-gray-500">+92 XXX XXXXXXX</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-6 py-5">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <p className="text-xs text-gray-400">Kaleem Sons — Crafted for Modern Men</p>
          <p className="text-xs text-gray-400">© 2025 All rights reserved</p>
        </div>
      </div>

    </div>
  );
}