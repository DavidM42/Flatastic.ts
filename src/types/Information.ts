export interface Flatmate {
    email: string,
    phone?: string,
    dob: string,
    language: string,
    /** Like '960852' */
    id: string,
    groupId: string,
    createdOn: string,
    lastLogin: string,
    firstName: string,
    lastName?: string,
    profileImage: URL,
    wgCode?: string,
    chorePoints: string,
    premiumUntil?: number,
    isPremium: boolean
}

export interface Information {
        id: string,
        name: string,
        city: string,
        street: null,
        country: string,
        date: string,
        image: URL,
        type: 'sharedflat' | string,
        founderId: string,
        postCode: string,
        /** 3 char like EUR */
        currency: string,
        /** 3 char like DEU */
        countryCode: string,
        flatmates: Flatmate[]
}