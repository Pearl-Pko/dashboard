const data = {
    orders: [
        {
            img: "",
            name: "Marcus Bergson",
            date: "2023-11-15",
            amount: 80000,
            status: "paid",
        },
        {
            img: "",
            name: "Jaydon Vaccaro",
            date: "2023-11-15",
            amount: 150000,
            status: "Refund",
        },
        {
            img: "",
            name: "Corey Schleifer",
            date: "2023-11-14",
            amount: 87000,
            status: "paid",
        },
        {
            img: "",
            name: "Cooper Press",
            date: "2023-11-15",
            amount: 100000,
            status: "Refund",
        },
        {
            img: "",
            name: "Phillip Lubin",
            date: "2023-11-13",
            amount: 80000,
            status: "paid",
        },
    ],
    platforms: [
        {
            name: "Book Bazaar",
            profit: 2500000,
            netGain: "+15%",
        },
        {
            name: "Artisan Aisle",
            profit: 1800000,
            netGain: "+10%",
        },
        {
            name: "Toy Troop",
            profit: 1200000,
            netGain: "+8%",
        },
        {
            name: "XStore",
            profit: 1000000,
            netGain: "+7%",
        },
    ],
    summary: [
        {
            img: "",
            name: "Total Order",
            units: 350,
            netGain: 23.5,
        },
        {
            img: "",
            name: "Total Refund",
            units: 270,
            netGain: -23.5,
        },
        {
            img: "",
            name: "Average Sales",
            units: 1567,
            netGain: -23.5,
        },
        {
            img: "",
            name: "Total Income",
            units: 350,
            netGain: 23.5,
        },
    ],
    monthly_sales_trend: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        data: [
            6000, 19000, 4500, 280000, 45000, 8500, 23000, 35000, 3000, 31000, 27500,
            2600,
        ],
    },
};

export default data;
