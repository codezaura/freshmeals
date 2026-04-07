import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// -----------------------------------------------------------------------

interface Seller {
  name: string;
  avatarUrl?: string;
}

export interface MealCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  currency?: string;
  seller: Seller;
  tag?: string;
  href?: string;
  className?: string;
}

// -----------------------------------------------------------------------

function SellerInfo({ seller }: { seller: Seller }) {
  const initials = seller.name.slice(0, 2).toUpperCase();

  return (
    <div className="flex items-center gap-2">
      {seller.avatarUrl ? (
        <Image
          src={seller.avatarUrl}
          alt={seller.name}
          width={24}
          height={24}
          className="w-6 h-6 rounded-full object-cover border border-gray-100"
        />
      ) : (
        <div className="w-6 h-6 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-[9px] font-semibold text-green-700 shrink-0">
          {initials}
        </div>
      )}
      <span className="text-xs text-gray-400 truncate">{seller.name}</span>
    </div>
  );
}

// -----------------------------------------------------------------------

export function MealCard({
  id,
  name,
  imageUrl,
  price,
  currency = "₹",
  seller,
  tag,
  href,
  className,
}: MealCardProps) {
  const cardHref = href ?? `/meals/${id}`;

  return (
    <Link
      href={cardHref}
      className={cn(
        "group flex flex-col bg-white rounded-2xl border border-gray-200/60 overflow-hidden",
        "hover:border-green-200 hover:shadow-md transition-all duration-200",
        className,
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-4/3 bg-green-50 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 text-green-700 border-0 text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm">
              {tag}
            </Badge>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 flex-1">
            {name}
          </h3>
          <span className="text-sm font-semibold text-green-800 shrink-0">
            {currency}
            {price.toLocaleString()}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        <SellerInfo seller={seller} />
      </div>
    </Link>
  );
}
