import Image from "next/image";
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
  Biohazard,
} from "lucide-react";

export default function HomePage() {
  const phone = "910-574-3536";
  const email = "rescueredycpr@gmail.com";

  // Training request form
  const bookingLink = "https://forms.gle/4uaGwidx2i6nYnZb9";

  // Stripe payment link for BLS class
  const stripeBlsLink = "https://buy.stripe.com/6oU00jg3AfZ4agl8wDcIE00";

  return (
    <div className="min-h-screen bg-white text-gray-800 w-full">
      {/* HERO */}
      <section className="w-full bg-red-600 text-white py-16 px-6 text-center">
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
          <a href={bookingLink} target="_blank" rel="noreferrer">
            <Button className="bg-black text-white hover:bg-gray-900">
              Book a Class
            </Button>
          </a>

          <a href={stripeBlsLink} target="_blank" rel="noreferrer">
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              Pay for BLS Class
            </Button>
          </a>

          <a href="/pricing">
            <Button className="bg-white/10 text-white border border-white/30 hover:bg-white/20">
              View Pricing
            </Button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Training Programs
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
          Serving Fayetteville and surrounding areas. On-site group training
          available for workplaces, schools, churches, and organizations.
        </p>

        <div className="max-w-3xl mx-auto mb-12 bg-gray-50 border rounded-2xl p-6 text-center shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Ready to schedule?</h3>
          <p className="text-gray-700 mb-5">
            Submit a training request and we’ll respond within 24 hours to confirm
            availability.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href={bookingLink} target="_blank" rel="noreferrer">
              <Button className="bg-red-600 text-white hover:bg-red-700">
                Training Request Form
              </Button>
            </a>
            <a href={stripeBlsLink} target="_blank" rel="noreferrer">
              <Button className="bg-black text-white hover:bg-gray-800">
                Pay for BLS Class
              </Button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <HeartPulse className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">
                CPR & BLS Certification
              </h3>
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
              <h3 className="font-semibold text-xl mb-2">
                Group & On-Site Training
              </h3>
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
              <h3 className="font-semibold text-xl mb-2">
                Disaster Preparedness
              </h3>
              <p>
                Prepare your family, workplace, or organization for severe weather,
                crises, and unexpected emergencies.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Droplet className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">
                Stop The Bleed® Training
              </h3>
              <p>
                Life-saving bleeding control skills anyone can use before EMS
                arrives.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 text-center">
              <Biohazard className="mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-xl mb-2">
                Bloodborne & Airborne Pathogens
              </h3>
              <p>
                Safety-focused training to reduce exposure risks and support
                workplace compliance. <span className="font-semibold">$35</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TRAINING IN ACTION */}
      <section id="training" className="bg-gray-50 border-t py-16 px-6 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Training in Action</h2>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
              Real students. Real skills. Real preparedness. See how we build
              confidence through hands-on, practical training.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl bg-white border shadow-sm">
              <div className="relative w-full aspect-[3/4] bg-black/5">
                <Image
                  src="/training1.jpg"
                  alt="CPR practice and technique guidance"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-semibold">Technique & Coaching</p>
                <p className="mt-1 text-sm text-gray-600">
                  Step-by-step guidance while students practice in real time.
                </p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl bg-white border shadow-sm">
              <div className="relative w-full aspect-[3/4] bg-black/5">
                <Image
                  src="/training2.jpg"
                  alt="Group practice stations during CPR training"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-semibold">Group Practice Stations</p>
                <p className="mt-1 text-sm text-gray-600">
                  Teams rotate through stations to build skill and confidence.
                </p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl bg-white border shadow-sm">
              <div className="relative w-full aspect-[3/4] bg-black/5">
                <Image
                  src="/training3.jpg"
                  alt="First aid and wound care training close-up"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
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

          <div className="mt-10 text-center">
            <div className="flex justify-center gap-4 flex-wrap">
              <a href={bookingLink} target="_blank" rel="noreferrer">
                <Button className="bg-red-600 text-white hover:bg-red-700">
                  Request Training
                </Button>
              </a>
              <a href={stripeBlsLink} target="_blank" rel="noreferrer">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Pay for BLS Class
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-100 py-16 px-6 w-full">
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

      {/* SECURE YOUR SPOT */}
      <section id="pay" className="py-16 px-6 bg-red-600 text-white w-full">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Secure Your Spot</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Ready to lock in your training date? You can pay online now for the BLS
            class or submit a training request for group and custom bookings.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold">BLS Class – $85</h3>
              <p className="mt-3 text-gray-700">
                Secure your BLS class payment online and reserve your spot quickly and
                easily.
              </p>

              <div className="mt-6">
                <a href={stripeBlsLink} target="_blank" rel="noreferrer">
                  <button className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-gray-800">
                    Pay for BLS Class
                  </button>
                </a>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold">Group & Custom Training</h3>
              <p className="mt-3 text-gray-700">
                Need training for a workplace, school, church, daycare, gym, or
                organization? Submit a request and we’ll confirm details directly.
              </p>

              <div className="mt-6">
                <a href={bookingLink} target="_blank" rel="noreferrer">
                  <button className="inline-flex items-center rounded-xl bg-red-600 px-6 py-3 text-white font-medium hover:bg-red-700">
                    Submit Training Request
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-white border-t w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">FAQ</h2>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
              Quick answers to the most common questions. If you don’t see your
              question here, reach out anytime.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-lg">How do I book a class?</h3>
              <p className="mt-2 text-gray-700">
                Click <span className="font-semibold">Book a Class</span> and
                complete the Training Request Form. We’ll confirm availability
                within 24 hours.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-lg">
                Do you offer group or on-site training?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes. We can travel to workplaces, schools, churches, and
                organizations for group training.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-lg">How long are classes?</h3>
              <p className="mt-2 text-gray-700">
                Class length varies by course type and group size. After you
                submit the request form, we’ll confirm the estimated time and
                what to expect.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Where do you provide training?</h3>
              <p className="mt-2 text-gray-700">
                We serve Fayetteville and surrounding areas. On-site options are
                available depending on location and scheduling.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-lg">What should I bring?</h3>
              <p className="mt-2 text-gray-700">
                Just bring yourself and be ready to practice hands-on skills. If
                anything else is needed for your session, we’ll let you know when
                confirming.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Can I pay online?</h3>
              <p className="mt-2 text-gray-700">
                Yes. Online payment is now available for the BLS class. For group
                training and custom requests, submit the Training Request Form and
                we’ll follow up with next steps.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm md:col-span-2">
              <h3 className="font-semibold text-lg">
                Do you offer Bloodborne & Airborne Pathogens training?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes. This course is available for individuals and workplaces and is priced at{" "}
                <span className="font-semibold">$35</span>. Submit the request form and we’ll confirm scheduling.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="flex justify-center gap-4 flex-wrap">
              <a href={bookingLink} target="_blank" rel="noreferrer">
                <Button className="bg-red-600 text-white hover:bg-red-700">
                  Submit Training Request
                </Button>
              </a>
              <a href={stripeBlsLink} target="_blank" rel="noreferrer">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Pay for BLS Class
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 text-center w-full">
        <h2 className="text-3xl font-semibold mb-6">Get Certified. Be Ready.</h2>
        <p className="mb-6">
          Call, email, or secure your BLS class online today.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
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

        <a href={stripeBlsLink} target="_blank" rel="noreferrer">
          <Button className="bg-red-600 text-white hover:bg-red-700">
            Pay for BLS Class – $85
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 w-full">
        <p className="mb-2">
          Training information provided for educational purposes. In an emergency,
          call 911.
        </p>
        <p>
          © {new Date().getFullYear()} Rescue Ready CPR & First Aid. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
