import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  HeartPulse,
  ShieldCheck,
  Users,
  PawPrint,
  AlertTriangle,
  Droplet,
} from "lucide-react";

export default function RescueReadyWebsite() {
  const phone = "910-574-3536";
  const email = "rescueredycpr@gmail.com";

  // TEMP booking link (we’ll replace with Google Form link later)
  const bookingLink = "https://forms.gle/4uaGwidx2i6nYnZb9";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-6">
  <img
    src="/rescuereadylogo.png"
    alt="Rescue Ready Logo"
    className="h-32 md:h-40 object-contain bg-white p-2 rounded shadow-md"
  />
</div>
        <h1 className="text-4xl font-bold mb-4">Rescue Ready CPR & First Aid</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Life-saving skills. Real-world confidence. Training individuals, schools,
          and organizations to respond when every second counts.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href={bookingLink}>
            <Button className="bg-black text-white hover:bg-gray-900">
              Book a Class
            </Button>
          </a>

          <a href="#contact">
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              Contact Us
            </Button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Training Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <HeartPulse className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">CPR & BLS Certification</h3>
              <p>
                Professional-level training aligned with current guidelines for
                healthcare providers, students, and workplaces.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">First Aid Training</h3>
              <p>
                Learn to respond to injuries, illness, and emergencies with calm,
                confident action.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">Group & On-Site Training</h3>
              <p>
                We bring hands-on training directly to your workplace, school,
                church, or organization.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <PawPrint className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">Pet CPR & First Aid</h3>
              <p>
                Because pets are family. Learn how to respond to choking, injury,
                and emergencies involving dogs and cats.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">Disaster Preparedness</h3>
              <p>
                Prepare your family, workplace, or organization for severe weather,
                crises, and unexpected emergencies.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Droplet className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">Stop The Bleed® Training</h3>
              <p>
                Life-saving bleeding control skills anyone can use before EMS
                arrives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Rescue Ready?</h2>
          <p className="text-lg leading-relaxed">
            Rescue Ready CPR & First Aid is built on one mission: making life-saving
            training accessible, practical, and confidence-building. Our courses are
            engaging, hands-on, and designed to prepare people for real situations —
            not just pass a class.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get Certified. Be Ready.</h2>
        <p className="mb-6">
          Call or email us today to schedule a class or group training.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            className="flex items-center justify-center gap-2 underline"
            href={`tel:${phone}`}
          >
            <Phone /> <span>{phone}</span>
          </a>

          <a
            className="flex items-center justify-center gap-2 underline"
            href={`mailto:${email}`}
          >
            <Mail /> <span>{email}</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© {new Date().getFullYear()} Rescue Ready CPR & First Aid. All rights reserved.</p>
      </footer>
    </div>
  );
}