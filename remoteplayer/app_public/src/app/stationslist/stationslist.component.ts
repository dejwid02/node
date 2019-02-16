import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player-service.service';
export class Station {
  id: Number;
  name: string;
  url: string;
  category: string;
  imageUrl: string
}
@Component({
  selector: 'app-stationslist',
  templateUrl: './stationslist.component.html',
  styleUrls: ['./stationslist.component.css']
})
export class StationslistComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  
  stations: Station[] = [
    {
      id: 1,
      imageUrl:'http://www.portalmedialny.pl/media/images/original/md5/e/c/ec4de4217b056cb7a3fb73dd7ce94135/polskie_radio_30.jpg' ,
      url: 'http://stream3.polskieradio.pl:8900',
      category: 'Polskie',
      name: 'PR1'
    },
    {
      id: 2,
      imageUrl:'http://static.prsa.pl/images/e3c67c19-fdc3-4ab2-909d-6b3ff40c3a3d.jpg' ,
      url: 'http://stream85.polskieradio.pl/omniaaxe/k16.stream/playlist.m3u8',
      category: 'Polskie',
      name: 'Koncerty w 3'
    },
    {
      id: 3,
      imageUrl:'https://ichef.bbci.co.uk/images/ic/640x360/p02lrp2x.jpg' ,
      url: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p',
      category: 'Zagraniczne',
      name: 'BBC Radio 1'},
    {
      id: 4,
      imageUrl:'http://www.bbc.co.uk/staticarchive/10baa75eb508c2fc07f6245cfba0a8b958dab13f.jpg' ,
      url: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p',
      category: 'Zagraniczne',
      name: 'BBC Radio 2'
    },
    {
      id: 4,
      imageUrl:'https://ichef.bbci.co.uk/images/ic/480xn/p029jbdz.jpg' ,
      url: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p',
      category: 'Zagraniczne',
      name: 'BBC Radio 3'
    },
    {
      id: 5,
      imageUrl:'http://radio.nadaje.com/media/images/thumbnail/md5/2/9/29823998bb559cd2cb3f15b79c96ceca/bbc6music.jpg' ,
      url: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p',
      category: 'Zagraniczne',
      name: 'BBC Radio 6'
    },
    {
      id: 5,
      imageUrl:'https://pbs.twimg.com/profile_images/914261187818344451/OdOTwXdk.jpg' ,
      url: 'http://stream.resonance.fm:8000/resonance',
      category: 'Zagraniczne',
      name: 'ResonanceFM'
    },
    {
      id: 6,
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hitradio_%C3%963.svg/1200px-Hitradio_%C3%963.svg.png' ,
      url: 'http://185.85.29.166:8000',
      category: 'Zagraniczne',
      name: 'OE3'
    },
    {
      id: 7,
      imageUrl:'https://www1.wdr.de/radio/startseite/symbolbilder/dummy-logo108~_v-gseagaleriexl.jpg' ,
      url: 'http://addrad.io/4WRNvc',
      category: 'Zagraniczne',
      name: 'WDR2'
    },
    {
      id: 8,
      imageUrl:'https://images-eu.ssl-images-amazon.com/images/I/41i37jMWVqL.png' ,
      url: 'http://media-ice.musicradio.com:80/ClassicFMMP3',
      category: 'Klasyczne',
      name: 'ClassicFM'
    },
    {
      id: 9,
      imageUrl:'https://cdn-radiotime-logos.tunein.com/s107537q.png' ,
      url: 'http://icepool.silvacast.com/KLASSIK1.mp3',
      category: 'Klasyczne',
      name: 'ClassicFM'
    },
    {
      id: 9,
      imageUrl:'https://cdn-radiotime-logos.tunein.com/s107537q.png' ,
      url: 'http://icepool.silvacast.com/KLASSIK1.mp3',
      category: 'Klasyczne',
      name: 'ClassicFM'
    },

    {
      id: 10,
      imageUrl:'https://positivemoney.org/wp-content/uploads/2014/02/bbc-radio-london.png' ,
      url: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_lrldn_mf_p',
      category: 'Zagraniczne',
      name: 'BBC London'
    },
    {
      id: 11,
      imageUrl:'http://d38n1wpq60hqoq.cloudfront.net/sites/default/files/radio/logos/logo-radio-trojka.jpg' ,
      url: 'http://w.dktr.pl:8000/trojka3.ogg',
      category: 'Polskie',
      name: 'PR 3'
    },
    {
      id: 12,
      imageUrl:'https://cdn-radiotime-logos.tunein.com/s65945d.png' ,
      url: 'http://stream4.nadaje.com/muzo',
      category: 'Polskie',
      name: 'MuzoFM'
    },
    {
      id: 13,
      imageUrl:'http://radio.nadaje.com/media/images/thumbnail/md5/5/a/5a5b6be93bb503fd627cc61564783fe7/zetchilli.jpg' ,
      url: 'http://chi-net-02.cdn.eurozet.pl:8900/',
      category: 'Polskie',
      name: 'MuzoFM'
    },
    


    
  ]

categories : string[] = Array.from(new Set(this.stations.map(m=>m.category)));
selectedCategory: string = this.categories[0];  
visibleStations: Station[] = this.filterStations();

filterStations() : Station[] {
  return this.stations.filter(station=>station.category===this.selectedCategory);
}
setCategory(newCategory:string) {
  this.selectedCategory = newCategory;
  this.visibleStations = this.stations.filter(station=>station.category===this.selectedCategory);
}
playStation(station: Station) {
  this.playerService.play(station.url);  
  //location.href='http://localhost:3000/play/' + encodeURIComponent(station.url);  
  }

  stopStation(station: Station) {
    this.playerService.stop();
  }
  ngOnInit() {
  }

}
