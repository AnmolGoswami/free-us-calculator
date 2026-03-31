"use client";

import React from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({
  title,
  url,
}: ShareButtonsProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  return (
    <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Share this calculator
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={shareLinks.twitter}
          target="_blank"
          className="px-5 py-2 rounded-xl bg-black text-white text-sm hover:opacity-80"
        >
          Twitter / X
        </a>

        <a
          href={shareLinks.facebook}
          target="_blank"
          className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm hover:opacity-80"
        >
          Facebook
        </a>

        <a
          href={shareLinks.linkedin}
          target="_blank"
          className="px-5 py-2 rounded-xl bg-blue-700 text-white text-sm hover:opacity-80"
        >
          LinkedIn
        </a>

        <a
          href={shareLinks.whatsapp}
          target="_blank"
          className="px-5 py-2 rounded-xl bg-green-500 text-white text-sm hover:opacity-80"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}