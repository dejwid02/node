import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player-service.service';
import { StationsDataService } from '../stationsdataservice.service';
export class Station {
  id: Number;
  name: string;
  url: string;
  imageUrl: string
  category: string;
  
}
@Component({
  selector: 'app-stationslist',
  templateUrl: './stationslist.component.html',
  styleUrls: ['./stationslist.component.css']
})
export class StationslistComponent implements OnInit {

  constructor(private playerService: PlayerService, private stationsDataService: StationsDataService) { }
  
  stations: Station[];
  categories : string[];
  selectedCategory: string;
  visibleStations: Station[];
  
  private getStations(): void {

    this.stationsDataService
      .getStations()
      .then(foundStations => {
        this.stations = foundStations;
        this.categories  = Array.from(new Set(this.stations.map(m=>m.category)));
    this.selectedCategory = this.categories[0];  
    this.visibleStations = this.filterStations();
      });
}



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
    this.getStations();
    
  }

}
