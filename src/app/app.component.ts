import { Component } from '@angular/core';
import { GithubServiceService } from './github-service.service'
import { RepoArray } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitSearch';

  values = '';
  isLoading: boolean = false;
  noInput: boolean = true;
  getFetchSuccess: boolean = false;
  NoOrgs: boolean = false;
  repoArrays: RepoArray[];
  arrayData;

  constructor(public getService: GithubServiceService) { }

  onKey(event: any) { // without type info
    this.values = event.target.value;
    console.log(this.values)
    this.getFetchSuccess = false;
    this.NoOrgs = false;
    if (this.values == '') {
      this.noInput = true;
    } else {
      this.noInput = false;
    }
  }

  search(userName: string): void {
    console.log(userName);
    this.getFetchSuccess = false;
    this.NoOrgs = false;
    userName = this.values.trim();
    if (!userName) { return; }
    this.getService.getOrgaRepos(userName)
    this.isLoading = true;
    this.fetchOrgs(userName);
  }

  fetchOrgs(UserName): void {
    this.getService.getOrgaRepos(UserName).subscribe(data => {
      this.repoArrays = data;
      this.arrayData = data;
      console.log(this.arrayData);
      if (this.repoArrays == undefined || this.repoArrays && this.repoArrays.length == 0) {
        this.NoOrgs = true;
      } else {
        this.NoOrgs = false;
      };
    });

  }
}
