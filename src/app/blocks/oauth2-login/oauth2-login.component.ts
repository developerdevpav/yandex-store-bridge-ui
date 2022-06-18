import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-oauth2-login',
  templateUrl: './oauth2-login.component.html',
  styleUrls: ['./oauth2-login.component.scss']
})
export class OAuth2LoginComponent implements OnInit {

  service: string | null = 'undefined';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service = this.activatedRoute.snapshot.queryParamMap.get('service');

    setTimeout(() => {
      this.router.navigate(['']).then();
    }, 4000)
  }

}
