"use server";

import axios, { AxiosRequestConfig } from "axios";
import {
  ProductResponse,
  SingleProductResponse,
} from "../types/products.types";

export async function getFeaturedProducts(): Promise<ProductResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/products`,
      timeout: 30000, // 30 seconds timeout
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", {
        message: error.message,
        code: error.code,
        url: error.config?.url,
      });
    }
    throw error;
  }
}

export async function getProductById({
  id,
}: {
  id: string;
}): Promise<SingleProductResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      timeout: 30000, // 30 seconds timeout
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", {
        message: error.message,
        code: error.code,
        url: error.config?.url,
      });
    }
    throw error;
  }
}
export async function getProductsByCategory(
  categoryId: string,
): Promise<ProductResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`,
      timeout: 30000,
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", {
        message: error.message,
        code: error.code,
        url: error.config?.url,
      });
    }
    throw error;
  }
}
export async function getProductsByBrand(
  brandId: string,
): Promise<ProductResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`,
      timeout: 30000,
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", {
        message: error.message,
        code: error.code,
        url: error.config?.url,
      });
    }
    throw error;
  }
}
