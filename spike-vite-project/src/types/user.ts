import * as z from 'zod';

// interface Geo {
//     lat: string,
//     lng: string,
// };

const GeoSchema = z.object({
    lat: z.string(),
    lng: z.string(),
});

// interface Address {
//     city: string,
//     geo: Geo,
//     street: string,
//     suite: string,
//     zipcode: string,
// };

const AddressSchema = z.object({
    city: z.string(),
    geo: GeoSchema,
    street: z.string(),
    suite: z.string(),
    zipcode: z.string(),
});

// interface Company {
//     bs: string,
//     catchPhrase: string,
//     name: string,
// };

const CompanySchema = z.object({
    bs: z.string(),
    catchPhrase: z.string(),
    name: z.string(),
});

// interface User {
//     address: Address,
//     company: Company,
//     email: string,
//     id: number,
//     name: string,
//     phone: string,
//     username: string,
//     website: string,
// };

const UserSchema = z.object({
    address: AddressSchema,
    company: CompanySchema,
    // email: z.string().email(),
    email: z.string(),
    id: z.number().int(),
    name: z.string(),
    phone: z.string(),
    username: z.string(),
    // website: z.string().url(),
    website: z.string(),
});

// export type Users = User[];
export const UsersSchema = z.array(UserSchema);

export type Geo = z.infer<typeof GeoSchema>;
export type Company = z.infer<typeof CompanySchema>;
export type Address = z.infer<typeof AddressSchema>;
export type User = z.infer<typeof UserSchema>;
export type Users = z.infer<typeof UsersSchema>;