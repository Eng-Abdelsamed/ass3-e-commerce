"use server";

import axios, { AxiosRequestConfig } from "axios";
import {
  CategoryResponse,
  SingleCategoryResponse,
} from "../types/category.types";

export async function getAllCategories(): Promise<CategoryResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/categories`,
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryById(
  id: string,
): Promise<SingleCategoryResponse> {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
}
