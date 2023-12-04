let monthList = [{
        name: "فروردین",
        monthCount: 1
    },
    {
        name: "اردیبهشت",
        monthCount: 2
    },
    {
        name: "خرداد",
        monthCount: 3
    },
    {
        name: "تیر",
        monthCount: 4
    },
    {
        name: "مرداد",
        monthCount: 5
    },
    {
        name: "شهریور",
        monthCount: 6
    },
    {
        name: "مهر",
        monthCount: 7
    },
    {
        name: "آبان",
        monthCount: 8
    },
    {
        name: "آذر",
        monthCount: 9
    },
    {
        name: "دی",
        monthCount: 10
    },
    {
        name: "بهمن",
        monthCount: 11
    },
    {
        name: "اسفند",
        monthCount: 12
    },

]

function findMonthNameByDatCount(day) {
    let result = ""

    if (day <= 186) {
        let divTo31 = day / 31
        divTo31 = Math.floor(divTo31)
        if (day % 31 == 0) {
            result = getMonthName((divTo31))
        } else {
            result = getMonthName((divTo31 + 1))
        }
    } else {
        let divTo30 = day / 30
        divTo30 = Math.floor(divTo30)
        if (day % 30 == 0) {
            result = getMonthName((divTo30))
        } else {
            result = getMonthName((divTo30 + 1))
        }
    }

    console.log(result)
}

function getMonthName(monthCount) {
    return (monthList.find(item => item.monthCount == monthCount).name)
}

findMonthNameByDatCount(192)