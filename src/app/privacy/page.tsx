import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, Database, Share2, Bell, Trash2 } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
        </p>
      </header>

      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              ReserveEase (&#34;we&#34;, &#34;our&#34;, or &#34;us&#34;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our reservation platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Booking information (Date, time, number of people, special requests)</li>
              <li>Payment information (processed through secure third-party payment processors)</li>
              <li>Device and usage information (IP address, browser type, operating system)</li>
              <li>Location data (if permitted by your device settings)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Process and manage your reservations</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our services and develop new features</li>
              <li>Send you updates, promotional messages, and other communications (with your consent)</li>
              <li>Detect, prevent, and address technical issues or fraudulent activities</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-6 w-6 text-primary" />
              Information Sharing and Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Service providers (e.g., businesses you make reservations with, payment processors)</li>
              <li>Analytics and search engine providers that assist us in the improvement of our site</li>
              <li>Law enforcement or other governmental agencies, as required by applicable laws</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We implement appropriate technical and organizational security measures to protect your information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-6 w-6 text-primary" />
              Your Choices and Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Set your browser to refuse cookies</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information provided in the &#34;Contact Us&#34; section.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="h-6 w-6 text-primary" />
              Data Retention and Deletion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We retain your personal information for as long as necessary to provide you with our services and as described in this privacy policy. You may request deletion of your data at any time, subject to any legal obligations we may have.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &#34;Last Updated&#34; date.
        </p>
        <p>
          Last Updated: November 24, 2024
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <address className="not-italic">
          InstantReserve Inc.<br />
          123 Address St<br />
          San Diego, CA 12345<br />
          Email: help@instantreserve.com<br />
          Phone: (123) 456-7890
        </address>
      </section>

      <div className="flex justify-center mt-8">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
