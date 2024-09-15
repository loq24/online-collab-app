import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Header({ children, className }: HeaderProps) {
  return (
    <div className={cn(`header`, className)}>
      <Link href="/" className="text-xl md:flex-1">
        Online Collab
      </Link>
      {children}
    </div>
  );
}
