'use client'

import Link from 'next/link'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'
import { Gamepad2, ShieldCheck, Truck, RefreshCcw } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Items', href: '/products' },
    { label: 'Consoles', href: '/products?q=console' },
    { label: 'TVs & Displays', href: '/products?q=tv' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'About', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="border-t bg-foreground text-primary-foreground">
      {/* Trust bar */}
      <div className="border-b border-white/10">
        <div className="container-custom py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-4.5 w-4.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Genuine Items Only</p>
                <p className="text-xs text-white/50">Every item personally inspected</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Truck className="h-4.5 w-4.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Fast UK Dispatch</p>
                <p className="text-xs text-white/50">Shipped within 1–2 business days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <RefreshCcw className="h-4.5 w-4.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">14-Day Returns</p>
                <p className="text-xs text-white/50">Hassle-free buyer protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                <Gamepad2 className="h-4 w-4 text-accent" strokeWidth={2} />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                PixelFlip
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Pre-owned consoles, TVs, and tech gear — tested, honest, and priced to sell fast.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/70">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/70">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/70">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} PixelFlip. All rights reserved. Items sold as described.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-white/30">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
