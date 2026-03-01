export default function PricingPage() {
  const bookingLink = "https://forms.gle/4uaGwidx2i6nYnZb9";

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Pricing & Course Options
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">CPR & BLS Courses</h2>
          <ul className="space-y-2">
            <li>Heartsaver CPR/AED (Adult Only) — $60</li>
            <li>Heartsaver CPR/AED (Adult & Child) — $70</li>
            <li>Heartsaver CPR/AED (Adult, Child & Infant) — $80</li>
            <li>BLS Initial Certification — $85</li>
            <li>BLS Renewal — $75</li>
            <li className="font-medium">Group Discount (6+) — $5 off per person</li>
          </ul>
        </section>

        <div className="text-center mt-12">
          <a href={bookingLink} target="_blank" rel="noreferrer">
            <button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-4 rounded-md">
              Book a Class
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
