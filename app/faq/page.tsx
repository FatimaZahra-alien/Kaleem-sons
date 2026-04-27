"use client"
import { useState } from "react"

type FAQItem = {
  q: string
  a: string
}

type Section = {
  id: string
  label: string
  items: FAQItem[]
}

const sections: Section[] = [
  {
    id: "orders",
    label: "Orders & Shipping",
    items: [
      {
        q: "How long does standard delivery take?",
        a: "Standard delivery within Pakistan takes 3–5 business days. Lahore, Karachi, and Islamabad orders typically arrive within 2–3 business days. International shipping to the UK, UAE, and EU takes 7–14 business days depending on your location.",
      },
      {
        q: "Can I track my order in real time?",
        a: "Yes. Once your order is dispatched, you'll receive a tracking link via SMS and email. You can also log into your account and track from the Orders page. We use TCS, Leopards, and DHL depending on your region.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Free standard shipping is available on all domestic orders above PKR 3,500. For orders below this threshold, a flat fee of PKR 250 applies. International orders are subject to carrier rates calculated at checkout.",
      },
      {
        q: "Can I change or cancel my order after placing it?",
        a: "Order modifications and cancellations are possible within 2 hours of placing your order, provided it hasn't been picked up by our courier. Contact us immediately via WhatsApp or email. Once dispatched, we cannot cancel or reroute.",
      },
      {
        q: "What happens if my order is delayed or lost?",
        a: "If your tracking shows no movement for more than 5 business days, please contact our support team. We will raise a claim with the courier and, if confirmed lost, send a replacement or issue a full refund within 7 business days.",
      },
    ],
  },
  {
    id: "sizing",
    label: "Sizing & Fit",
    items: [
      {
        q: "How do I find my correct size?",
        a: "Each product page includes a detailed size guide with chest, waist, and hip measurements in CM and inches. We recommend measuring yourself with a soft tape measure. If between sizes, size up for relaxed fit or down for compression.",
      },
      {
        q: "Do your sizes run large or small?",
        a: "Our performance and compression lines run true-to-size. Our lifestyle collections have a slightly relaxed cut and may feel generous. Product descriptions always note the intended fit — performance-fit, relaxed, or oversized.",
      },
      {
        q: "Do you carry extended sizing?",
        a: "Yes. Most collections run from XS to 3XL. Select styles go up to 4XL. Extended size availability is noted on each product page. Sign up to our newsletter to be notified of new size drops.",
      },
      {
        q: "What if the size I ordered doesn't fit?",
        a: "We offer free size exchanges within 14 days of delivery, provided the item is unworn, unwashed, and in original packaging with tags attached. Initiate an exchange from your account dashboard or by contacting support.",
      },
    ],
  },
  {
    id: "returns",
    label: "Returns & Refunds",
    items: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 14 days of delivery. Items must be unused, unwashed, in original packaging, and with all tags intact. Sale items, custom orders, and undergarments are non-returnable.",
      },
      {
        q: "How long do refunds take to process?",
        a: "Once we receive and inspect your return, refunds are processed within 3–5 business days. The amount will be credited to your original payment method. Bank transfer refunds may take an additional 2–3 days.",
      },
      {
        q: "Who pays for return shipping?",
        a: "If the return is due to a defect or our error, we cover return shipping in full. For change-of-mind returns, the customer bears the shipping cost. We recommend using a trackable courier.",
      },
      {
        q: "Can I return an item bought during a sale?",
        a: "Sale items are final sale and cannot be returned or exchanged unless they arrive damaged or defective. We strongly recommend consulting our size guide before purchasing sale items.",
      },
    ],
  },
  {
    id: "products",
    label: "Products & Care",
    items: [
      {
        q: "What materials are used in Kaleem Sons products?",
        a: "We use performance fabrics including moisture-wicking polyester blends, 4-way stretch spandex, and breathable cotton-modal composites. Our premium line features recycled PET fabrics as part of our sustainability commitment.",
      },
      {
        q: "How should I wash my Kaleem Sons sportswear?",
        a: "Machine wash on a cold, gentle cycle (30°C). Do not use bleach or fabric softener. Hang dry — avoid tumble drying. For compression garments, washing inside out helps preserve elasticity and colour.",
      },
      {
        q: "Are your products suitable for professional athletes?",
        a: "Yes. Our Pro Performance line features anti-odour treatment, UPF 50+ protection, and ergonomic seam placement for unrestricted movement — designed for cricket, football, gym training, and running.",
      },
      {
        q: "Do you offer custom or bulk team orders?",
        a: "Yes, we offer custom team kits and bulk orders for schools, clubs, and corporate clients. Minimum order quantity is 20 pieces. Custom embroidery, printing, and colour matching are available. Contact teams@kaleemson.com for a quote.",
      },
    ],
  },
  {
    id: "account",
    label: "My Account",
    items: [
      {
        q: "How do I create an account?",
        a: "Click Sign Up in the top right corner and enter your name, email, and a password. You can also sign up during checkout. An account lets you track orders, save addresses, manage returns, and access member-only promotions.",
      },
      {
        q: "I forgot my password. How do I reset it?",
        a: "Go to the login page and click 'Forgot Password'. Enter your registered email and we'll send a reset link within a few minutes. Check your spam folder if you don't see it. The reset link expires after 24 hours.",
      },
      {
        q: "How do I delete my account or data?",
        a: "Email privacy@kaleemson.com to request account deletion. We will permanently delete your personal data within 30 days. Order history required for legal or tax purposes may be retained for the mandated period.",
      },
    ],
  },
]

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span className="text-[15px] font-medium text-black group-hover:opacity-60 transition-opacity">
          {item.q}
        </span>
        <span
          className={`w-7 h-7 rounded-full border border-black flex items-center justify-center text-base shrink-0 transition-all duration-300 ${
            open ? "bg-black text-white rotate-45" : "bg-white text-black"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="pb-6 text-sm leading-relaxed text-gray-500 font-light max-w-xl">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [activeId, setActiveId] = useState("orders")

  const active = sections.find((s) => s.id === activeId)!

  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* NAV */}
      <nav className="flex items-center justify-between px-12 py-5 border-b border-black sticky top-0 bg-white z-50">
        <div className="font-black text-xl tracking-widest uppercase">
          Kaleem<span className="opacity-30">Sons</span>
        </div>
        <ul className="flex gap-8 text-[11px] font-medium tracking-widest uppercase list-none">
          {["Shop", "Collections", "About", "FAQ", "Contact"].map((l) => (
            <li key={l}>
              <a href="#" className={`no-underline text-black transition-opacity ${l === "FAQ" ? "opacity-100" : "opacity-40 hover:opacity-100"}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="grid grid-cols-2 border-b border-black" style={{ minHeight: 280 }}>
        <div className="px-12 py-16 border-r border-black flex flex-col justify-end">
          <p className="text-[11px] tracking-widest uppercase text-gray-400 mb-6 font-medium">
            Help Centre / FAQ
          </p>
          <h1 className="font-black text-7xl leading-none uppercase tracking-tight">
            Got<br />Questions?
            <span className="block font-light italic text-4xl mt-2 tracking-normal normal-case">
              We&apos;ve got answers.
            </span>
          </h1>
        </div>
        <div className="bg-black px-12 py-16 flex flex-col justify-between">
          <p className="text-[11px] tracking-widest uppercase text-white/40 font-medium">
            Kaleem Sons Sportswear — Est. 2010
          </p>
          <p className="text-white/70 text-[15px] leading-relaxed font-light max-w-sm">
            Everything you need to know about our products, sizing, shipping, and returns.
            Can&apos;t find what you&apos;re looking for? Reach our team directly.
          </p>
          <p className="font-black text-7xl text-white/10 self-end">FAQ</p>
        </div>
      </section>

      {/* TABS */}
      <div className="flex border-b border-black overflow-x-auto">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className={`px-9 py-[18px] text-[11px] tracking-widest uppercase font-medium border-r border-gray-200 whitespace-nowrap transition-all ${
              activeId === s.id
                ? "bg-black text-white"
                : "bg-white text-gray-400 hover:bg-gray-50 hover:text-black"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* BODY */}
      <div className="grid" style={{ gridTemplateColumns: "220px 1fr", minHeight: 520 }}>
        {/* SIDEBAR */}
        <aside className="border-r border-black px-8 py-10 flex flex-col gap-1">
          <p className="text-[10px] tracking-widest uppercase text-gray-400 font-medium mb-4">
            Browse Topics
          </p>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`text-left text-[13px] px-3 py-[10px] rounded-sm transition-all ${
                activeId === s.id
                  ? "bg-black text-white font-medium"
                  : "text-gray-400 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {s.label}
            </button>
          ))}
        </aside>

        {/* ACCORDION */}
        <main className="px-12 py-12">
          <div className="flex items-baseline gap-4 mb-10 pb-5 border-b border-gray-200">
            <h2 className="font-black text-3xl uppercase tracking-wide">{active.label}</h2>
            <span className="text-[11px] tracking-widest uppercase text-gray-400">
              {active.items.length} Questions
            </span>
          </div>
          <div>
            {active.items.map((item, i) => (
              <AccordionItem key={i} item={item} />
            ))}
          </div>
        </main>
      </div>

      {/* CONTACT STRIP */}
      <div className="bg-black text-white grid grid-cols-3 border-t border-black">
        {[
          { label: "Email Support", value: "support@kaleemson.com", sub: "Response within 24 hours" },
          { label: "WhatsApp", value: "+92 300 000 0000", sub: "Mon – Sat, 9am – 7pm PKT" },
          { label: "Store Location", value: "Sialkot, Punjab, Pakistan", sub: "Walk-ins welcome, 10am – 6pm" },
        ].map((c) => (
          <div key={c.label} className="px-12 py-10 border-r border-white/10 last:border-r-0 flex flex-col gap-2">
            <p className="text-[10px] tracking-widest uppercase text-white/40 font-medium">{c.label}</p>
            <p className="text-[15px]">{c.value}</p>
            <p className="text-xs text-white/40 font-light">{c.sub}</p>
          </div>
        ))}
      </div>

      
    </div>
  )
}
