import { useState } from 'react'; // We'll need useState for the hover effect
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Phone,
  Mail, // Still useful for general form context
  MapPin, // Still useful for general form context
  Send,
  MessageCircle, // A good icon for WhatsApp/chat
} from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have this utility for conditional classes

// No longer importing Sheet components as we're building a custom hover effect

export default function Contact() {
  const primaryPhoneNumber = '+919824448111';
  const [isWhatsAppBookmarkExpanded, setIsWhatsAppBookmarkExpanded] = useState(false);

  return (
    <section id="contact" className="section-padding bg-muted/30 relative"> {/* Add relative for fixed positioning */}
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In
            <span className="text-primary"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to take control of your financial future? Contact us today for a free consultation
            and discover how we can help you achieve your financial goals.
          </p>
        </div>

        {/* Contact Form - Centered */}
        <div className="flex justify-center"> {/* Flexbox to center the card */}
          <div className="w-full lg:w-2/3 xl:w-1/2"> {/* Control max width for centering */}
            <Card className="card-professional animate-fade-in"> {/* Removed slide-in animation for static center */}
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="focus-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="focus-ring"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="focus-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="focus-ring"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="wealth-management">Wealth Management</option>
                      <option value="investment-planning">Investment Planning</option>
                      <option value="insurance">Insurance Solutions</option>
                      <option value="tax-planning">Tax Planning</option>
                      <option value="retirement-planning">Retirement Planning</option>
                      <option value="education-planning">Education Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your financial goals and how we can help you..."
                      rows={5}
                      className="focus-ring"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="rounded border-input focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      I agree to receive newsletters and promotional emails
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-primary text-lg py-4 focus-ring"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in">
          <Card className="card-professional overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7582236353916!2d70.77196637508051!3d22.290076280351234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c902d12f4625%3A0x6a2c27b14d2a13b0!2sPride%20Sapphire!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" // Placeholder, replace with actual embed
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agarwal Financial Services Office Location"
            ></iframe>
          </Card>
        </div>
      </div>

      {/* WhatsApp Floating Bookmark */}
      <div
        className={cn(
          "fixed right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-l-lg shadow-lg z-50 flex items-center p-2 cursor-pointer transition-all duration-300 ease-in-out",
          isWhatsAppBookmarkExpanded ? 'w-48 pr-4' : 'w-12', // Expanded width and padding
        )}
        onMouseEnter={() => setIsWhatsAppBookmarkExpanded(true)}
        onMouseLeave={() => setIsWhatsAppBookmarkExpanded(false)}
      >
        <a
          href={`https://wa.me/${primaryPhoneNumber.replace(/\+/g, '').replace(/\s/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center h-full w-full"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-8 w-8 flex-shrink-0" />
          <span
            className={cn(
              "ml-2 text-lg font-semibold whitespace-nowrap overflow-hidden transition-opacity duration-300 ease-in-out",
              isWhatsAppBookmarkExpanded ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0', // Show/hide text
            )}
          >
            WhatsApp Us
          </span>
        </a>
      </div>
    </section>
  );
}