import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2 mb-2">
              <span className="text-xl font-bold text-primary">ADeCoS</span>
              <span className="text-sm font-medium text-muted-foreground">2026</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              First International Workshop on Agentic and Decentralized Coordination for Softwarized Networks
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-1">
              Co-located with{" "}
              <Link
                href="https://netsoft2026.ieee-netsoft.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                IEEE NetSoft 2026
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              June 2026
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ADeCoS Workshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
