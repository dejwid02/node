import { Component, OnInit } from '@angular/core';

export class Station {
  id: Number;
  name: String;
  url: String;
  imageUrl: String
}
@Component({
  selector: 'app-stationslist',
  templateUrl: './stationslist.component.html',
  styleUrls: ['./stationslist.component.css']
})
export class StationslistComponent implements OnInit {

  constructor() { }

  stations: Station[] = [
    {id: 1,
    imageUrl:'http://www.portalmedialny.pl/media/images/original/md5/e/c/ec4de4217b056cb7a3fb73dd7ce94135/polskie_radio_30.jpg' ,
    url: encodeURIComponent('http://stream3.polskieradio.pl:8900'),
    name: 'PR1'},
    {id: 2,
      imageUrl:'https://ichef.bbci.co.uk/images/ic/640x360/p02lrp2x.jpg' ,
      url: encodeURIComponent('http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p'),
      name: 'BBC Radio 1'}

    ]

  ngOnInit() {
  }

}
