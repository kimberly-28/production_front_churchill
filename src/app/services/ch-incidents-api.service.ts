import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { TwitterAccount } from 'app/interfaces/twitter-accounts';


@Injectable({
  providedIn: 'root'
})
export class ChIncidentsApiService {

    url = "http://localhost:3000/incidents"

   
  constructor(private http: HttpClient) { }

  //RiskType
  getAllRiskTypes(){
    return this.http.get<IncidentsDetails[]>(`${this.url}/risktypes`);
  }

  //ActionProtocol
  postNewActionProtocol(registerActionProtocol: IncidentsDetails){
    return this.http.post(`${this.url}/actionprotocol`, registerActionProtocol,  {responseType: 'text'} );
    }

    getAllActionProtocols(){
        return this.http.get<IncidentsDetails[]>(`${this.url}/actionprotocols`);
    }

  //AlertType
  getAllAlertTypes(){
    return this.http.get<IncidentsDetails[]>(`${this.url}/alerttypes`);
  }

  postNewAlertType(registerAlertType: IncidentsDetails){
    return this.http.post(`${this.url}/alerttype`, registerAlertType,  {responseType: 'text'} );
  }

  deleteAlertTypes(alert: IncidentsDetails){
    return this.http.delete(`${this.url}/alerttype/${alert.id}`, {responseType: 'text'} );

}

  //KeyWords
  getAllKeyWords(){
    return this.http.get<IncidentsDetails[]>(`${this.url}/keywords`);
  }

  postNewKeyWord(registerKeyWord: IncidentsDetails){
    return this.http.post(`${this.url}/keyword`, registerKeyWord,  {responseType: 'text'} );
  }

  putKeyWord(keyWord: IncidentsDetails){
    return this.http.put(`${this.url}/keyword/${keyWord.id}`, keyWord,  {responseType: 'text'} );
}

  deleteKeyWord(keyWords: IncidentsDetails){
    return this.http.delete(`${this.url}/keyword/${keyWords.id}`, {responseType: 'text'} );

}


  //Twitter Accounts
    getAllTwitterAccounts(){
        return this.http.get<TwitterAccount[]>(`${this.url}/twitteraccounts`);
      }

      postNewTwitterAccount(twitterAccount: TwitterAccount){
    return this.http.post(`${this.url}/twitteraccount`, twitterAccount,  {responseType: 'text'} );
    }

    putTwitterAccount(twitterAccount: TwitterAccount){
        return this.http.put(`${this.url}/twitteraccounts/${twitterAccount.id}`, twitterAccount,  {responseType: 'text'} );

    }

    deleteTwitterAccount(twitterAccount: TwitterAccount){
        return this.http.delete(`${this.url}/twitteraccounts/${twitterAccount.id}`, {responseType: 'text'} );

    }
}
