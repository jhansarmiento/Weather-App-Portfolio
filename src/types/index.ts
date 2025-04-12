export type CoordinatesType = {
    lat: number,
    lon: number
}

export type getCurrentWeatherType = {
    name: string,
    main: {
        temp: number,
        humidity: number
    }
}