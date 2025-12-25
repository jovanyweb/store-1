
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path:"edit/:id",
    renderMode:RenderMode.Server
  },
  {
    path:":id",
    renderMode:RenderMode.Server, 
  }, 
  {
    path: '**',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      let products: any = await fetch("https://fakestoreapi.com/products").then(res => res.json())
      return products.map((product: any) => ({
        id: String(product.id)
      }));


    }
  },

];
