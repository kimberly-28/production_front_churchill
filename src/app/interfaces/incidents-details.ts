export class IncidentsDetails{

  //  geofencingId   ?:  number;
    id: string;
    name  :  string;
    desc  :  string;
    create_at : string;
    update_at : string;
    risk_level: string;
    action_protocol: string;
    key_word: string;
    alerts: string;
    alertsDetails: {
        action_protocol: string,
        name: string,
        risk_level: string,
        id: string
    };

}