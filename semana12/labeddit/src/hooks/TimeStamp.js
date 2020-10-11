export const dateFormat = (timeStamp) => {
    // console.log('------------------')
    const mil = Date.now()-timeStamp
    const years = mil/(365*24*60*60*1000)
    const months = mil/(30*24*60*60*1000)
    const days = mil/(24*60*60*1000)
    const hours = mil/(60*60*1000)
    const mins = mil/(60*1000)
    const secs = mil/(1000)

    // console.log('anos', years)
    // console.log('meses', months)
    // console.log('dias', days)
    // console.log('horas', hours)
    // console.log('mins', mins)
    // console.log('segs', secs)

    let msg = ''

    if (secs < 1) {
        msg = 'agora mesmo'
    } else if (mins < 1) {
        msg = 'há menos de 1 minuto'
    } else if (hours < 1) {
        msg = `há ${Math.ceil(mins)} minutos`
    } else if (hours === 1) {
        msg = 'há 1 hora'
    } else if (hours < 24) {
        msg = `há ${Math.ceil(hours)} horas`
    } else if (days === 1) {
        msg = 'há 1 dia'
    } else if (days < 30) {
        msg = `há ${Math.ceil(days)} dias`
    } else if (months === 1) {
        msg = 'há 1 mês'
    } else if (months < 12) {
        msg = `há ${Math.ceil(months)} meses`
    } else if (years === 1) {
        msg = 'há 1 ano'
    } else if (years > 5) {
        msg = 'há mais de 5 anos'
    } else if (years > 4) {
        msg = 'há mais de 4 anos'
    } else if (years > 3) {
        msg = 'há mais de 3 anos'
    } else if (years > 2) {
        msg = 'há mais de 2 anos'
    } else if (years > 1) {
        msg = 'há mais de 1 anos'
    }

    return (msg)
}