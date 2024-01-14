"use client";

import { useState, ChangeEvent, useEffect } from 'react';
import { SuppliersList } from './SuppliersList';

export const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [suppliers, setSuppliers] = useState([]);

  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    fetchPosts(searchTextValue);
  }
  
  const fetchPosts = async (searchTextValue: string) => {
    const response = await fetch(`/api/supplier?filter=${searchTextValue}`);
    if (response.status === 204 || response.status === 500) setSuppliers([]);
    else {
      const data = await response.json();
      setSuppliers(data);
    }
  }

  return (
    <>
      <section className="feed">
        <form className="relative w-full flex-center">
          <input 
            type="text"
            name="search"
            placeholder="Digite o consumo mensal de energia da sua empresa (kWh)"
            value={searchText}
            onChange={handleSearchChange}
            required
            className="search_input peer"
          />
        </form>
      </section>

      <SuppliersList data={suppliers}/>
    </>
  )
}
