import { CategoryName, Product } from "@/types";
import { apiRequest } from "./api";

export async function getAllProducts(): Promise<Product[]> {
  return apiRequest<Product[]>("/products");
}

export async function getProductById(id: number): Promise<Product> {
  return apiRequest<Product>(`/products/${id}`);
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return apiRequest<Product[]>(`/products/category/${category}`);
}

export async function getAllCategories(): Promise<CategoryName[]> {
  return apiRequest<CategoryName[]>("/products/categories");
}
