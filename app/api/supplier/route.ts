import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";
import Supplier from "@/models/suppliers";


export const GET = async (request: NextRequest) => {
  try {
    await connectToDB();

    const monthlyEnergyConsumptionKwh = Number(request.nextUrl.searchParams.get('filter'));

    const suppliers = await Supplier.find({
      minKwhLimit: { $lt: monthlyEnergyConsumptionKwh }
    })
    .sort({ customersRatingAverage: -1 })
    .lean();

    console.log("suppliers", suppliers)

    if (suppliers.length > 0) {
      return new Response(JSON.stringify(suppliers), { status: 200 })
    }
    return new Response(null, { status: 204 })

  } catch (error) {
    console.log("error", error)
    return new Response('Failed to fetch suppliers', { status: 500 })
  }
}
