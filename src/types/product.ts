export interface Product {
    id:                 number;
    name:               string;
    family:             string;
    type:               string;
    term:               string;
    insurable:          boolean;
    insurance:          string;
    prepaymentOption:   string;
    restrictionsOption: string;
    restrictions:       string;
    fixedPenaltySpread: string;
    helocOption:        string;
    helocDelta:         number;
    lenderName:         string;
    lenderType:         string;
    rateHold:           string;
    rate:               number;
    ratePrimeVariance:  number;
    bestRate:           number;
    created:            Date;
    updated:            Date;
}
