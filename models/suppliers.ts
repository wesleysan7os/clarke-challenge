import { Supplier } from '@/@types/supplier.interface';
import { Schema, model, models } from 'mongoose';

const SupplierSchema = new Schema<Supplier>({
	name: {
		type: String,
		required: [true, "'Supplier's name is required."]
	},
	logo: {
		type: String,
	},
	state: {
		type: String,
	},
	kwhCost: {
		type: Number,
    required: [true, "'Supplier's energy cost for production is required."]
	},
	minKwhLimit: {
		type: Number,
    required: [true, "'Supplier's minimun limit for energy production is required."]
	},
	customersCount: {
		type: Number,
	},
	customersRatingAverage: {
		type: Number,
	}
});

export default model<Supplier>('Supplier', SupplierSchema)
