export type Offers = Offer[];

export type Location = {
        latitude: number;
        longitude: number;
        zoom: number;
    }

export type City = {
        location: Location;
        name: string;
    }

export type Host = {
        avatarUrl: string;
        id: number;
        isPro: boolean;
        name: string;
    }

export type Gps = {
        latitude: number;
        longitude: number;
        zoom: number;
    }

export type Offer = {
        bedrooms: number;
        city: City;
        description: string;
        goods: string[];
        host: Host;
        id: number;
        images: string[];
        isPremium: boolean;
        location: Gps;
        maxAdults: number;
        previewImage: string;
        price: number;
        rating: number;
        title: string;
        type: string;
    }
