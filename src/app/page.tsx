import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="px-6 pt-14 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold text-gray-600">
                CPR / BLS Training • Community Ready
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Rescue Ready CPR
              </h1>

              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Professional, hands-on CPR & BLS training designed to build real confidence.
                We focus on clarity, practice, and making sure you leave ready.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center rounded-xl bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800"
                >
                  View Pricing
                </Link>

                <Link
                  href="/#book"
                  className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-900 hover:bg-gray-50"
                >
                  Book a Class
                </Link>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-800">Serving:</span>{" "}
                  Individuals • Groups • Workplace Teams
                </p>
              </div>
            </div>

            {/* Right side hero image / placeholder */}
            <div className="rounded-2xl border bg-gray-50 p-4 shadow-sm">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/training2.jpg"
                  alt="CPR training session"
                  width={1200}
                  height={800}
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  priority
                />
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <div className="rounded-xl border bg-white p-3 text-center">
                  <p className="text-xs text-gray-600">Hands-On Practice</p>
                  <p className="mt-1 text-sm font-semibold">Real Confidence</p>
                </div>
                <div className="rounded-xl border bg-white p-3 text-center">
                  <p className="text-xs text-gray-600">Clear Instruction</p>
                  <p className="mt-1 text-sm font-semibold">Easy to Follow</p>
                </div>
                <div className="rounded-xl border bg-white p-3 text-center">
                  <p className="text-xs text-gray-600">Group Friendly</p>
                  <p className="mt-1 text-sm font-semibold">Teams Welcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING SHOWCASE */}
      <section id="training" className="px-6 py-14 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Training Showcase</h2>
              <p className="mt-2 text-gray-700 max-w-2xl">
                A look into our training environment — focused, hands-on, and supportive.
              </p>
            </div>

            <Link
              href="/pricing"
              className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 border hover:bg-gray-100"
            >
              See Pricing →
            </Link>
          </div>

          {/* Corporate grid: 2 per row on desktop, 1 per row on mobile */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <figure className="overflow-hidden rounded-2xl bg-white border shadow-sm">
              <div className="relative">
                <Image
                  src="/training1.jpg"
                  alt="CPR practice and technique guidance"
                  width={1400}
                  height={900}
                  className="h-[320px] w-full object-cover sm:h-[360px]"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-semibold">Technique & Coaching</p>
                <p className="mt-1 text-sm text-gray-600">
                  Step-by-step guidance while students practice in real time.
                </p>
              </figcaption>
            </figure>

            {/* Card 2 */}
            <figure className="overflow-hidden rounded-2xl bg-white border shadow-sm">
              <div className="relative">
                <Image
                  src="/training2.jpg"
                  alt="CPR training session with multiple stations"
                  width={1400}
                  height={900}
                  className="h-[320px] w-full object-cover sm:h-[360px]"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-semibold">Group Practice Stations</p>
                <p className="mt-1 text-sm text-gray-600">
                  Teams rotate through stations to build skill and speed.
                </p>
              </figcaption>
            </figure>

            {/* Card 3 (full width on desktop for balance) */}
            <figure className="overflow-hidden rounded-2xl bg-white border shadow-sm sm:col-span-2">
              <div className="relative">
                <Image
                  src="/training3.jpg"
                  alt="Wound care training close-up"
                  width={1600}
                  height={900}
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-semibold">Skills That Translate</p>
                <p className="mt-1 text-sm text-gray-600">
                  Practical training details that make a difference when it matters.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* BOOK A CLASS */}
      <section id="book" className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border bg-white shadow-sm p-8">
            <h2 className="text-3xl font-bold tracking-tight">Book a Class</h2>
            <p className="mt-2 text-gray-700 max-w-2xl">
              Ready to schedule training? Submit the request form and we’ll follow up with availability.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Replace this link with your real Google Form link */}
              <a
                href="PASTE_YOUR_GOOGLE_FORM_LINK_HERE"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800"
              >
                Open Booking Form
              </a>

              <Link
                href="/pricing"
                className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-900 hover:bg-gray-50"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>
                Prefer to talk first? Email us with your group size, location, and preferred dates.
              </p>
              {/* Replace with Boris’ business email/phone if you want it on the site */}
              <p className="mt-2">
  <span className="font-semibold text-gray-800">Contact:</span>{" "}
  <a
    href="mailto:rescueredycpr@gmail.com"
    className="hover:underline"
  >
    rescueredycpr@gmail.com
  </a>
  {" • "}
  <a
    href="tel:19105743536"
    className="hover:underline"
  >
    (910) 574-3536
  </a>
</p>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-semibold">Rescue Ready CPR</p>
          <p className="mt-2 text-sm text-white/80">
            CPR/BLS Training • Community Ready • Professional Instruction
          </p>
          <p className="mt-4 text-xs text-white/60">
             {new Date().getFullYear()} Rescue Ready CPR. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}


