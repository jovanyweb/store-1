import { provideRouter, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './home/home';
import { ProductPage } from './product-page/product-page';
import { ApplicationConfig } from '@angular/core';
import { CreateProduct } from './create-product/create-product';
import { UpdateProduct } from './update-product/update-product';

export const routes: Routes = [
    {
        path: "",

        component: MainLayout,
        children: [
            {
                component: Home,
                path: "",
                pathMatch: 'full',
                title: "Jovany George"
            },
            {
                component: CreateProduct,
                path: "create",
                title: "Jovany George - Create Product"
            },
            {
                component: UpdateProduct,
                path: "edit/:id",
                title: "Jovany George - Update Product", 
            },
            {
                component: ProductPage,
                path: ":id",
                title: "Jovany George - Products",
            }
        ]
    }
];

