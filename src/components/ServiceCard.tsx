"use client";

import { useState } from "react";
import Link from "next/link";
import type { Service } from "@/data/services";

type Props = {
  service: Service;
  categoryName: string;
};

export default function ServiceCard({ service, categoryName }: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link
      href={`/request?service=${encodeURIComponent(service.name)}&category=${encodeURIComponent(categoryName)}`}
      className="card-3d group relative flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-wisdom-card"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-wisdom-navy">
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={service.image}
            alt={service.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-spring group-hover:scale-110"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-wisdom-navy p-2">
            <span className="text-center text-[10px] sm:text-xs text-wisdom-muted leading-tight line-clamp-4">
              {service.name}
            </span>
          </div>
        )}
      </div>

      <div className="relative p-3 sm:p-4 flex-1 flex flex-col border-t border-white/10 bg-wisdom-card">
        <h3 className="text-xs sm:text-sm font-bold leading-snug text-white group-hover:text-wisdom-cyan transition-colors duration-300 line-clamp-3">
          {service.name}
        </h3>
        <span className="mt-2 inline-flex items-center justify-center rounded-lg bg-wisdom-cyan/15 border border-wisdom-cyan/35 px-2.5 py-1.5 text-[10px] sm:text-xs font-bold text-wisdom-cyan">
          Request
        </span>
      </div>
    </Link>
  );
}
