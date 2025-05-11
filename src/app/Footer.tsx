import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-card bg-secondary-foreground border-t border-b py-10 text-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Contact Info */}
        <div className="space-y-5">
          <div className="space-y-3">
            <h4 className="mb-2 text-lg font-semibold">Contact</h4>
            <p className="flex items-center gap-3">
              <Phone className="size-5" />{" "}
              <a href="tel:+91 651-2330818">Ranchi Clinic : +91 651-2330818</a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="size-5" />{" "}
              <a href="tel:+91 9153881402">Patna Clinic : +91 9153881402</a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="size-5" />{" "}
              <a href="tel:+91 9153881401">Kolkata Clinic : +91 9153881401</a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="size-5" />{" "}
              <a href="tel:+91 9234400007">Delhi Clinic : +91 9234400007</a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-5" />{" "}
              <a href="mailto:abhihomoeo@gmail.com">
                Email : abhihomoeo@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Services / Quick Links */}
        <div>
          <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-autism/what-is-autism">About Autism</Link>
            </li>
            <li>
              <Link href="/treatment/approach">Treatment & Support</Link>
            </li>
            <li>
              <Link href="/resources/blog">Resources</Link>
            </li>
            <li>
              <Link href="/stories/videos">Success Stories</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="mb-2 text-lg font-semibold">Get Involved</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/get-involved/sponsor">Sponsor a Child</Link>
            </li>
            <li>
              <Link href="/get-involved/donate">Donate</Link>
            </li>
            <li>
              <Link href="/get-involved/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link href="/get-involved/partners">Partner with Us</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter (Optional) */}
        <div>
          <h4 className="mb-2 text-lg font-semibold">
            Subscribe to Our Newsletter
          </h4>
          <form className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded border px-2 py-1"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded border px-2 py-1"
              required
            />
            <button
              type="submit"
              className="rounded bg-green-700 px-3 py-1 text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-muted-foreground mt-8 border-t pt-4 text-center">
        © {new Date().getFullYear()} DR.Rajeev Autism Care. All rights
        reserved.
      </div>
    </footer>
  );
}
