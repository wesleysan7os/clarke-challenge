import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";
import Supplier from "@/models/suppliers";


export const GET = async (request: NextRequest) => {
  try {
    await connectToDB();

    const monthlyEnergyConsumptionKwh = request.nextUrl.searchParams.get('filter');

    const suppliers = await Supplier.find({
      minKwhLimit: { $lt: monthlyEnergyConsumptionKwh }
    });

    if (suppliers.length > 0) {
      return new Response(JSON.stringify(suppliers), { status: 200 })
    }
    return new Response('No suppliers found for the given criteria', { status: 404 })

  } catch (error) {
    return new Response('Failed to fetch suppliers', { status: 500 })
  }
}
