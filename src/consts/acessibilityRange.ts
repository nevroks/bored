type acessibility={
    maxValue:number,
    minValue:number
}
interface IPriceRange{
    max:acessibility,
    big:acessibility,
    mid:acessibility,
    little:acessibility
}

export const AcessibilityRange:IPriceRange={
    max:{
        maxValue:0,
        minValue:0
    },
    big:{
        maxValue:0.4,
        minValue:0.01
    },
    mid:{
        maxValue:0.7,
        minValue:0.41
    },
    little:{
        maxValue:1,
        minValue:0.71
    }
}