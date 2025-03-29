import { Facebook, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Big Dance Centre</h3>
            <p className="mt-4 text-sm text-gray-400 sm:text-base">
              Where passion meets performance. Join our vibrant community of
              dancers and discover your potential.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#classes"
                  className="text-sm text-gray-400 hover:text-white sm:text-base"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="#faculty"
                  className="text-sm text-gray-400 hover:text-white sm:text-base"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-sm text-gray-400 hover:text-white sm:text-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-gray-400 hover:text-white sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact Info</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-400 sm:text-base">
                <MapPin className="h-4 w-4" />
                123 Dance Street, City
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400 sm:text-base">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400 sm:text-base">
                <Mail className="h-4 w-4" />
                info@bigdancecentre.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400 sm:text-base">
            &copy; {new Date().getFullYear()} Big Dance Centre. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
