import { Component, OnInit } from '@angular/core';


interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  value;
  listOfData: any[] = [
    {
      stt: 1,
      checked: true,
      date: '29/11/2020',
      loai: 'HT',
      so_chung_tu: '2424',
      money: '456,250',
      noi_dung: 'Xi măng Long Sơn',
      child: [
        {
          stt: 1,
          nv: 'Có',
          tk: '331/01',
          maKH: 'HCVN',
          money: '100,000',
          diachi: 'Bình Thạnh, Tp HCM'
        },
        {
          stt: 1,
          nv: 'Có',
          tk: '331/01',
          maKH: 'HCVN',
          money: '100,000',
          diachi: 'Bình Thạnh, Tp HCM'
        },
        {
          stt: 1,
          nv: 'Nợ',
          tk: '331/01',
          maKH: 'HCVN',
          money: '100,000',
          diachi: 'Bình Thạnh, Tp HCM'
        },
      ],
    },
    {
      stt: 2,
      checked: true,
      date: '29/11/2020',
      loai: 'HT',
      so_chung_tu: '2424',
      money: '456,250',
      noi_dung: 'Xi măng Insee',
      child: [
        {
          stt: 1,
          nv: 'Có',
          tk: '331/01',
          maKH: 'HCVN',
          money: '100,000',
          diachi: 'Tân Bình, Tp HCM'
        },
        {
          stt: 1,
          nv: 'Có',
          tk: '331/01',
          maKH: 'HCVN',
          money: '100,000',
          diachi: 'Tân Bình, Tp HCM'
        },
      ]
    },
  ];

  listOfData1: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.showChild(this.listOfData[0]);
  }

  showChild(data): void {
    this.listOfData1 = data.child;
  }
}
