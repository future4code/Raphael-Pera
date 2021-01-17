function roubaCasas(houseList: number[]): number {
    let money: number = 0
    for (let first = 0; first < houseList.length; first++) {

        let lastHouse: number = first
        let moneyTest: number = houseList[first]
        for (let next = 0; next < houseList.length; next++) {
            if (next > lastHouse + 1) {moneyTest += houseList[next]; lastHouse = next}
            money = moneyTest > money ? moneyTest : money
        }

        let moneyTest2: number = 0
        for (let second = first + 2; second < houseList.length; second ++) {
            const initialSum: number = houseList[first] + houseList[second]
            moneyTest2 = initialSum > moneyTest2 ? initialSum : moneyTest2

            for (let next = second + 2; next < houseList.length; next ++) {
                const sum: number = houseList[first] + houseList[second] + houseList[next]
                moneyTest2 = sum > moneyTest2 ? sum : moneyTest2
            }

            money = moneyTest2 > money ? moneyTest2 : money
        }
        
    }
    return money
}
