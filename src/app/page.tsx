import { ArrowRight, Briefcase, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageTabs from "@/components/image-tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/*hero ection*/}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold ">
              A better way to track your job application
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize, and manage your job search in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">
                  Start for free
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">Free forever. No credit card required.</p>
            </div>
          </div>
        </section>
        <ImageTabs />

        <section className="border-t bg-gray-50/60 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Briefcase className="size-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Organize Applications
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Keep all your job applications, notes, and contacts neatly organized in one centralized place.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrendingUp className="size-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Track Process
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor your interview stages, follow-up timelines, and overall job search progress.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Stay Organized
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Never lose track of upcoming interview schedules, offer deadlines, or application status updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
