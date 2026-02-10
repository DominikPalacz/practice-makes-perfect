interface Address {
    city: string,
    geo: Geo,
    street: string,
    suite: string,
    zipcode: string,
};

interface Company {
    bs: string,
    catchPhrase: string,
    name: string,
};

interface Geo {
    lat: string,
    lng: string,
};

interface User {
    adress: Address,
    company: Company,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
};

export type Users = User[];