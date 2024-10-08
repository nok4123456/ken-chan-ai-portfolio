import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e2540] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Me</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <p>nok4123456@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <p>Hong Kong</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Social Media</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/chan-ken-863348236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/nok4123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Resume</h3>
            <Button variant="ghost" asChild>
              <a
                href="/Chan Kwan Nok - Resume.pdf"
                download
                aria-label="Download CV"
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>
        </div>
        <Separator className="my-8 bg-[#3a456c]" />
        <div className="text-center text-sm text-gray-400">
          &copy; {currentYear} Ken Chan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
