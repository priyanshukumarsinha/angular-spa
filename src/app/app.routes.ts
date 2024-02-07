import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { DocsComponent } from './docs/docs.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
 { path: 'about', component: AboutComponent },
 { path: 'gallery', component: GalleryComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'docs', component: DocsComponent },
 { path: 'blog', component: BlogComponent },
 { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})

export class AppRoutingModule {}