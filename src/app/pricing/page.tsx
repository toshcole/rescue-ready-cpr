export default function PricingPage() {
  const bookingLink = "https://forms.gle/4uaGwidx2i6nYnZb9";

  const links = {
    blsInitial: "https://buy.stripe.com/6oU00jg3AfZ4agl8wDcIE00",
    blsRenewal: "https://buy.stripe.com/00waEX3gO7syewBeV1cIE01",
    bloodborne: "https://buy.stripe.com/6oUdR9bNk8wC88deV1cIE02",
    adultOnly: "https://buy.stripe.com/dRmbJ16t08wC1JP6ovcIE03",
    adultChild: "https://buy.stripe.com/cNieVddVscMS1JPfZ5cIE04",
    adultChildInfant: "https://buy.stripe.com/bJeaEX8B85kqgEJ28fcIE05",
    firstAid: "https://buy.stripe.com/fZu8wP4kS7sy0FLeV1cIE06",
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Rescue Ready CPR & First Aid Pricing
        </h1>
        <p className="text-center text-gray-600 mb-12">Learn. Act. Save.</p>

        <section className="mb-12 rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">CPR & BLS Courses</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Heartsaver CPR/AED (Adult Only) – $60</h3>
              <a
                href={links.adultOnly}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Pay Now
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Heartsaver CPR/AED (Adult & Child) – $70</h3>
              <a
                href={links.adultChild}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Pay Now
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Heartsaver CPR/AED (Adult, Child & Infant) – $80</h3>
              <a
                href={links.adultChildInfant}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Pay Now
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">BLS Initial Certification – $85</h3>
              <a
                href={links.blsInitial}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
              >
                Pay Now
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">BLS Renewal – $75</h3>
              <a
                href={links.blsRenewal}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
              >
                Pay Now
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Group Discount (6+) – $5 off per person</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Group Booking
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">First Aid Courses</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Standard First Aid Certification – $65</h3>
              <a
                href={links.firstAid}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Pay Now
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">First Aid Add-On to CPR – $40</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Booking
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5 md:col-span-2">
              <h3 className="text-xl font-semibold mb-3">CPR + First Aid Combo – $110</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Booking
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Pet CPR & First Aid</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Individual – $75</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Booking
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Group (6+) – $65 per person</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Group Booking
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Stop The Bleed®</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Individual – $60</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Booking
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Add-On with CPR – $45</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Booking
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5 md:col-span-2">
              <h3 className="text-xl font-semibold mb-3">Corporate / School Training – Custom Quote</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Bloodborne & Airborne Pathogens</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Individual Training – $35</h3>
              <a
                href={links.bloodborne}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
              >
                Pay Now
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Group / Workplace Training – Available Upon Request</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Booking
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Disaster Preparedness</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Individual – $55</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Booking
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">Family Package (Up to 4) – $180</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Booking
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5 md:col-span-2">
              <h3 className="text-xl font-semibold mb-3">Community / Church Workshop – Custom Quote</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">On-Site Corporate Training</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">1–10 Participants – Starting at $700</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Quote
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">11–20 Participants – Starting at $1,200</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Quote
              </a>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <h3 className="text-xl font-semibold mb-3">20+ Participants – Custom Pricing</h3>
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium"
              >
                Request Quote
              </a>
            </div>
          </div>

          <p className="mt-4 text-gray-700">
            Includes instruction, equipment, certification cards, and digital roster tracking.
          </p>
        </section>

        <section className="mb-12 rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Recertification Special</h2>
          <p className="mb-6">Returning Students – $10 off any renewal course</p>
          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
          >
            Request Renewal Booking
          </a>
        </section>

        <div className="text-center mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-medium"
          >
            Book a Class
          </a>

          <a
            href={links.blsInitial}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Pay for BLS Class
          </a>
        </div>
      </div>
    </main>
  );
}
