import Link from "next/link";
import { Facebook, Twitter, Youtube, Mail } from "lucide-react";

export default function SocialSidebar() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <div className="fixed right-0 top-1/2 z-40 -translate-y-1/2 transform">
      <div className="flex flex-col space-y-2 bg-black/90 p-2 rounded-l-lg shadow-lg">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-white transition-all hover:text-orange-500"
            aria-label={label}
            title={label}
          >
            <div className="flex items-center space-x-2 p-2 rounded-md transition-transform duration-200 group-hover:scale-110">
              <Icon className="h-6 w-6" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
