function roubaCasas(houseList) {
    var money = 0;
    for (var first = 0; first < houseList.length; first++) {
        var lastHouse = first;
        var moneyTest = houseList[first];
        for (var next = 0; next < houseList.length; next++) {
            if (next > lastHouse + 1) {
                moneyTest += houseList[next];
                lastHouse = next;
            }
            money = moneyTest > money ? moneyTest : money;
        }
        var moneyTest2 = 0;
        for (var second = first + 2; second < houseList.length; second++) {
            var initialSum = houseList[first] + houseList[second];
            moneyTest2 = initialSum > moneyTest2 ? initialSum : moneyTest2;
            for (var next = second + 2; next < houseList.length; next++) {
                var sum = houseList[first] + houseList[second] + houseList[next];
                moneyTest2 = sum > moneyTest2 ? sum : moneyTest2;
            }
            money = moneyTest2 > money ? moneyTest2 : money;
        }
    }
    return money;
}
