import { Supplier } from '@/@types/supplier.interface'
import { SupplierCard } from './SupplierCard';

interface SuppliersListProps {
  data: Supplier[];
}

export const SuppliersList = ({ data }: SuppliersListProps) => {
  return (
    <div className="mt-16 flex gap-4">
      {data.map((supplier) => (
        <SupplierCard
          key={supplier._id}
          supplier={supplier}
        />
      ))}
    </div>
  );
}