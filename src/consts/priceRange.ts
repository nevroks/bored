type price={
    maxValue:number,
    minValue:number
}
interface IPriceRange{
    free:price,
    almostFree:price,
    mid:price,
    expensive:price
}

export const PriceRange:IPriceRange={
    free:{
        maxValue:0,
        minValue:0
    },
    almostFree:{
        maxValue:0.4,
        minValue:0.01
    },
    mid:{
        maxValue:0.7,
        minValue:0.41
    },
    expensive:{
        maxValue:1,
        minValue:0.71
    }
}