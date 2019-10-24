import { Component, OnInit } from "@angular/core";
import { Icustomer } from "./customer";
import { customerService } from "./customer.service";

@Component ({
    selector : 'pm-customers',
    templateUrl : './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})

export class customerListComponent implements OnInit {
  pageTitle: string ='customer List';
  errorMessage : string;
  _listFilter : string;
  p: number = 1;



    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value:string){
      this._listFilter = value;
      this.filteredcustomers = this.listFilter ? this.performFilter(this.listFilter) : this.customers;
    }

    filteredcustomers : Icustomer[];
    customers : Icustomer[] = [];

    constructor(private customerService : customerService){

    }

    key: string = 'name'; //set default
    reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


    performFilter(filterBy : string): Icustomer[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.customers.filter((customer: Icustomer) => 
            customer.customerName.toLocaleLowerCase().indexOf(filterBy) !== -1 || customer.customerEmail.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit() : void {
        this.customerService.getcustomers().subscribe(
        customers => {
           this.customers = customers;
           this.filteredcustomers = this.customers;
        },
        error => this.errorMessage = <any>error
        );
    }
}