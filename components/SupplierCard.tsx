"use client";

import Image from 'next/image';
import { Supplier } from '@/@types/supplier.interface';
import { Rating } from '@/components/Rating';

interface SupplierCardProps {
  supplier: Supplier;
}

export const SupplierCard = ({ supplier }: SupplierCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center gap-6 m-5">
        <Image
          src={supplier.logo!}
          alt="supplier_img"
          width={80}
          height={80}
          className="rounded-full object-contain"
        />
        <div className="font-bold text-xl mb-2">{supplier.name}</div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          <strong>Custo por kWh:</strong> R${supplier.kwhCost} <br></br>
          <strong>Quantidade de clientes:</strong> {supplier.customersCount} <br></br>
        </p>
        <span className='mt-5 inline-block'>
          <Rating rating={supplier.customersRatingAverage}/> 
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        {supplier.tags && supplier.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
