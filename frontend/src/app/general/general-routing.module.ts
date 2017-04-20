import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { HomeBodyComponent } from '../home/home-body/home-body.component';
import { ExcelFileUploaderComponent } from '../file-upload/excel-file-uploader/excel-file-uploader.component';
import { CustomerAllComponent } from '../customer/customer-all/customer-all.component';
import { CustomerDetailComponent } from '../customer/customer-detail/customer-detail.component';
import { ProductCreateComponent } from '../product/product-create/product-create.component';
import { CustomerCreateComponent } from '../customer/customer-create/customer-create.component';
import { AreaCreateComponent } from '../area/area-create/area-create.component';
import { InvoiceAllComponent } from '../invoice/invoice-all/invoice-all.component';
import { InvoiceRecentComponent } from '../invoice/invoice-recent/invoice-recent.component';
import { InvoiceEditComponent } from '../invoice/invoice-edit/invoice-edit.component';
import { InvoiceHtmlComponent } from '../invoice/invoice-html/invoice-html.component';

const generalRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeBodyComponent
    },
    {
        path: 'upload-file',
        component: ExcelFileUploaderComponent
    },
    {
        path: 'customer/all',
        component: CustomerAllComponent
    },
    {
        path: 'customer/detail/:id',
        component: CustomerDetailComponent
    },
    {
        path: 'customer/create',
        component: CustomerCreateComponent
    },
    {
        path: 'product',
        component: ProductCreateComponent
    },
    {
        path: 'area',
        component: AreaCreateComponent
    },
    {
        path: 'invoice/all',
        component: InvoiceAllComponent
    },
    {
        path: 'invoice/recent',
        component: InvoiceRecentComponent
    },
    {
        path: 'invoice/edit',
        component: InvoiceEditComponent
    },
    {
        path: 'invoice/display/:id',
        component: InvoiceHtmlComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(generalRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GeneralRoutingModule { }