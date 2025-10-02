'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  className?: string;
}

export default function ProfileCard({ 
  name, 
  role, 
  company,
  avatar,
  className 
}: ProfileCardProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {avatar ? (
        <Image
          src={avatar}
          alt={name}
          width={56}
          height={56}
          className="rounded-full"
        />
      ) : (
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0)}
        </div>
      )}
      <div>
        <h4 className="text-lg font-semibold text-white">{name}</h4>
        <p className="text-sm text-slate-400">
          {role}
          {company && ` at ${company}`}
        </p>
      </div>
    </div>
  );
}
