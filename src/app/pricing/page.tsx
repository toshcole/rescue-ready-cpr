export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Rescue Ready CPR & First Aid Pricing
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Learn. Act. Save.
        </p>

        {/* CPR & BLS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">CPR & BLS Courses</h2>
          <ul className="space-y-2">
            <li>Heartsaver CPR/AED (Adult Only) – $60</li>
            <li>Heartsaver CPR/AED (Adult & Child) – $70</li>
            <li>Heartsaver CPR/AED (Adult, Child & Infant) – $80</li>
            <li>BLS Initial Certification – $85</li>
            <li>BLS Renewal – $75</li>
            <li>Group Discount (6+) – $5 off per person</li>
          </ul>
        </section>

        {/* First Aid */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">First Aid Courses</h2>
          <ul className="space-y-2">
            <li>Standard First Aid Certification – $65</li>
            <li>First Aid Add-On to CPR – $40</li>
            <li>CPR + First Aid Combo – $110</li>
          </ul>
        </section>

        {/* Pet CPR */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pet CPR & First Aid</h2>
          <ul className="space-y-2">
            <li>Individual – $75</li>
            <li>Group (6+) – $65 per person</li>
          </ul>
        </section>

        {/* Stop The Bleed */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Stop The Bleed®</h2>
          <ul className="space-y-2">
            <li>Individual – $60</li>
            <li>Add-On with CPR – $45</li>
            <li>Corporate / School Training – Custom Quote</li>
          </ul>
        </section>

        {/* Disaster Preparedness */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disaster Preparedness</h2>
          <ul className="space-y-2">
            <li>Individual – $55</li>
            <li>Family Package (Up to 4) – $180</li>
            <li>Community / Church Workshop – Custom Quote</li>
          </ul>
        </section>

        {/* On-Site Training */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">On-Site Corporate Training</h2>
          <ul className="space-y-2">
            <li>1–10 Participants – Starting at $700</li>
            <li>11–20 Participants – Starting at $1,200</li>
            <li>20+ Participants – Custom Pricing</li>
            <li>Includes instruction, equipment, certification cards, and digital roster tracking</li>
          </ul>
        </section>

        {/* Recertification Special */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Recertification Special</h2>
          <p>Returning Students – $10 off any renewal course</p>
        </section>

        <div className="text-center mt-10">
          <a
            href="https://forms.gle/4uaGwidx2i6nYnZb9"
            target="_blank"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Book a Class
          </a>
        </div>
      </div>
    </main>
  );
}
