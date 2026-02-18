"use server";

import axios, { AxiosRequestConfig } from "axios";
import { BrandResponse, SingleBrandResponse } from "../types/brand.types";

export async function getAllBrands(): Promise<BrandResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/brands`,
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getBrandById(id: string): Promise<SingleBrandResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
}
