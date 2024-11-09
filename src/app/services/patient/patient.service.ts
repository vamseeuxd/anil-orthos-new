import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, switchMap, of } from 'rxjs';

export interface IPatient {
  name: string;
  gender: string;
  dateOfBirth: string;
  mobile: string;
  addressLine: string;
  city: string;
  state: string;
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  mockData: IPatient[] = [
    {
      name: 'Ravi Kumar',
      gender: 'Male',
      dateOfBirth: '1990-03-15',
      mobile: '9876543210',
      addressLine: 'D.No 12-3-45, Main Road',
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Sita Devi',
      gender: 'Female',
      dateOfBirth: '1985-06-10',
      mobile: '9867532410',
      addressLine: 'D.No 7-9-32, Kalyani Nagar',
      city: 'Guntur',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Rakesh Reddy',
      gender: 'Male',
      dateOfBirth: '1992-08-21',
      mobile: '9890123456',
      addressLine: 'D.No 15-2-20, MG Road',
      city: 'Rajahmundry',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Lakshmi Prasad',
      gender: 'Female',
      dateOfBirth: '1995-11-01',
      mobile: '9845098765',
      addressLine: 'D.No 20-4-67, Shivaji Nagar',
      city: 'Kakinada',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Suresh Babu',
      gender: 'Male',
      dateOfBirth: '1988-05-30',
      mobile: '9876092345',
      addressLine: 'D.No 10-8-45, Ramalayam Street',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Anusha Rani',
      gender: 'Female',
      dateOfBirth: '1993-02-14',
      mobile: '9854793021',
      addressLine: 'D.No 5-4-32, Beach Road',
      city: 'Bhimavaram',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Rajesh Verma',
      gender: 'Male',
      dateOfBirth: '1997-07-19',
      mobile: '9860098765',
      addressLine: 'D.No 12-6-78, Konda Reddy Street',
      city: 'Nellore',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Divya Bharathi',
      gender: 'Female',
      dateOfBirth: '1999-12-23',
      mobile: '9845234512',
      addressLine: 'D.No 8-4-67, Gandhi Nagar',
      city: 'Kadapa',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Naresh Kumar',
      gender: 'Male',
      dateOfBirth: '1991-04-12',
      mobile: '9834678091',
      addressLine: 'D.No 17-2-54, Railway Colony',
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    {
      name: 'Sunita Rao',
      gender: 'Female',
      dateOfBirth: '1987-09-05',
      mobile: '9875123098',
      addressLine: 'D.No 4-5-11, Hospital Road',
      city: 'Ongole',
      state: 'Andhra Pradesh',
      country: 'India',
    },
  ];

  // Observable for the data
  private dataSubject = new BehaviorSubject(this.mockData);
  data$: Observable<IPatient[]> = this.dataSubject.asObservable();

  // Observable for the search text
  private searchTextSubject = new BehaviorSubject<string>('');
  searchText$: Observable<string> = this.searchTextSubject.asObservable();

  // Method to update the search text
  updateSearchText(text: string) {
    if (text.trim().length >= 2) {
      this.searchTextSubject.next(text);
    }
  }

  // Method to filter data based on search criteria
  searchResults$ = this.searchText$.pipe(
    debounceTime(300), // Debounce to avoid rapid search calls
    switchMap((text) => this.filterData(text))
  );

  // Method to filter data based on the search text
  private filterData(searchText: string): Observable<IPatient[]> {
    if (!searchText) {
      return this.data$; // Return all data if no search text is entered
    }

    const filteredData = this.mockData.filter((patient: IPatient) => {
      return (
        patient.name.toLowerCase().includes(searchText.toLowerCase()) ||
        patient.city.toLowerCase().includes(searchText.toLowerCase()) ||
        patient.mobile.includes(searchText)
      );
    });

    return of(filteredData);
  }
}
