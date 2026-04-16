'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-white text-[#1F1F1F]">

      {/* Page Header */}
      <section className="pt-16 pb-2 px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-5xl font-bold ">
            About Kaleem Sons
          </h1>
        </div>
      </section>

      {/* Main Content - Very Centered with Lots of Side Space */}
      <section className="container mx-auto pt-2 pb-8 px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-4xl">   {/* ← Narrower for more left/right space */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="divide-y divide-gray-200  text-[17px] leading-loose text-[#333]"
          >

            {/* Introduction */}
            <div className="pt-4 pb-8">
              <p>
                Kaleem Sons is a premium gym and fitness clothing brand in Pakistan, proudly based in 
                Sialkot, a city globally recognized for sports and athletic manufacturing.
              </p>
              <p>
                Kaleem Sons was founded and is owned by <strong>Baseer Kaleem </strong>
                with a mission to provide high-performance gym wear that combines strength, comfort, 
                and modern athletic style.
              </p>
              <p>
                At Kaleem Sons, we design and manufacture men’s gym clothing and fitness apparel built for 
                intense workouts, bodybuilding, training, and everyday active lifestyles. Every product 
                reflects durability, flexibility, and a powerful fit that supports peak performance in the gym.
              </p>
            </div>

            {/* Our Vision */}
            <div className="pt-8 pb-8">
              <h2 className="text-4xl font-semibold pt-8">Our Vision</h2>
              <p>
                Our vision is to become a leading gym clothing brand in Pakistan, delivering premium 
                workout wear and activewear that meets international quality standards while representing 
                Pakistan’s growing fitness culture.
              </p>
            </div>

            {/* Our Product Range */}
            <div className="pt-8 pb-8">
              <h2 className="text-4xl font-semibold pt-8">Our Product Range</h2>
              <p>Kaleem Sons offers a complete range of gym and fitness apparel in Pakistan, including:</p>
              
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Oversize Tees for modern gym style</li>
                <li>Full Compression Shirts for maximum muscle support</li>
                <li>Half Compression Shirts for balanced performance</li>
                <li>Tank Tops and Vests for intense training sessions</li>
                <li>Training Shorts designed for mobility and comfort</li>
                <li>Bottoms for workouts and daily activewear</li>
                <li>Accessories to complete your gym look</li>
              </ul>

              <p className="pt-8 pb-8">
                All our products are designed to support workout training, bodybuilding, and fitness routines, 
                making Kaleem Sons a trusted sports wear brand in Pakistan.
              </p>
            </div>

            {/* Why Choose Kaleem sons */}
            <div className="pt-8 pb-8">
              <h2 className="text-4xl font-semibold pt-8">Why Choose Kaleem Sons?</h2>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Premium quality sports wear and fitness clothing</li>
                <li>Designed for training, workouts, and bodybuilding</li>
                <li>Strong focus on performance, durability, and fit</li>
                <li>Based in Sialkot, Pakistan</li>
                <li>Trusted Pakistani activewear and gym apparel brand</li>
              </ul>
            </div>

            {/* Founder & Ownership */}
            <div className="pt-8 pb-8">
              <h2 className="text-4xl font-semibold pt-8">Founder & Ownership</h2>
              <p>
                Kaleem Sons was founded and is owned by Mohammad Baseer Bin kaleem, a Pakistani entrepreneur passionate 
                about fitness and athletic fashion. Under his leadership, Kaleem Sons continues to grow as 
                a reliable fitness clothing and gym wear brand in Pakistan.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="pt-8 pb-8">
              <h2 className="text-4xl font-semibold pt-8">Our Commitment</h2>
              <p>
                We are committed to delivering premium gym wear in Pakistan that motivates athletes to 
                push beyond limits. From fabric selection to final stitching, every detail is crafted 
                to ensure long-lasting quality and comfort.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4 pt-8 border-t">
              <h2 className="text-4xl font-semibold">Contact & Connect With Us</h2>
              <div className="space-y-3">
                <p><strong>Location:</strong> Sialkot, Pakistan</p>
                <p><strong>Contact:</strong> +92 326 5546 298</p>
                <p><strong>Email:</strong> baseerbutt444@gmail.com</p>
                <p><strong>Instagram:</strong> @Kaleem&sons</p>
                <p><strong>Facebook:</strong> Kaleemsons</p>
                <p><strong>Website:</strong> https://KaleemSons.vercel.app</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}