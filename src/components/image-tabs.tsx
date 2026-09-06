"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ImageTabs() {

    const [activeTab, setActiveTab] = useState("organize");

    return (
                <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="flex gap-2 justify-center mb-8">
                <Button
                  type="button"
                  onClick={() => setActiveTab("organize")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors cursor-pointer ${
                    activeTab === "organize"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Organize Applications
                </Button>
                <Button
                  type="button"
                  onClick={() => setActiveTab("get-hired")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors cursor-pointer ${
                    activeTab === "get-hired"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Get Hired
                </Button>
                <Button
                  type="button"
                  onClick={() => setActiveTab("manage-boards")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors cursor-pointer ${
                    activeTab === "manage-boards"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Manage Boards
                </Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "organize" && (
                  <Image
                    src="/hero-images/hero1.png"
                    alt="Organize applications"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                )}
                {activeTab === "get-hired" && (
                  <Image
                    src="/hero-images/hero2.png"
                    alt="Get hired"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                )}
                {activeTab === "manage-boards" && (
                  <Image
                    src="/hero-images/hero3.png"
                    alt="Manage boards"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </section>
    );
}