export interface ICarList {
    brand: string
    carId: number
    imageUrl: string
    locationId: number
    name: string
    pricingDescription: string
    registeredOn: string
    carAccessoriess: IAccessoriess[]
}

export interface Icar  {
    carId: number;
    brand: string;
    name: string;
    pricingDescription: string;
    pricing: number;
    locationId: number;
    registeredOn: string;
    imageUrl: string;
    vehicleNo: string;
    ownerUserId: number;
    zoomCarAccessoriess:  IAccessoriess[]
}

export interface IAccessoriess {
    accessoriesId: number
    accessoriesTitle: string
    showOnWebsite: boolean
    carId: number
}


export interface IApiResposneModel { 
    "message": string;
    "result": boolean;
    "data": any;
}


export interface ILocation   {
    locationId: number
    city: string
    title: string
    pincode: string
  }

  export interface IBooking  {
    brand: string
    bookingNo: string
    travelDate: string
    departureTime: string
    carId: number
    imageUrl: string
    locationId: number
    name: string
    carBrand: string
    pricingDescription: string
    locationTitle: string
    carOwnerName: string
    carOwnermobileNo: string
    bookingId: number
    isComplete: boolean
  }
  