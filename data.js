const factors = [

    {
        id: "campfire",

        name: "Api dari aktivitas manusia",

        icon: "🔥",

        category: "human",

        description:
        "Sumber api dari kegiatan manusia dapat menjadi pemicu kebakaran jika tidak dikelola dengan aman."
    },


    {
        id: "cigarette",

        name: "Puntung rokok",

        icon: "🚬",

        category: "human",

        description:
        "Benda yang masih memiliki bara dapat menjadi sumber api ketika dibuang sembarangan."
    },


    {
        id: "dryweather",

        name: "Cuaca kering",

        icon: "☀️",

        category: "environment",

        description:
        "Kondisi kering membuat bahan vegetasi memiliki kandungan air yang lebih rendah."
    },


    {
        id: "wind",

        name: "Angin",

        icon: "💨",

        category: "environment",

        description:
        "Angin dapat membantu api dan bara berpindah sehingga kebakaran dapat menyebar."
    },


    {
        id: "dryvegetation",

        name: "Vegetasi kering",

        icon: "🌾",

        category: "fuel",

        description:
        "Vegetasi yang kering dapat menjadi bahan bakar yang mendukung pembakaran."
    },


    {
        id: "litter",

        name: "Serasah kering",

        icon: "🍂",

        category: "fuel",

        description:
        "Daun dan bahan organik kering di permukaan tanah dapat menjadi bahan yang mudah terbakar."
    }

];


const level1Cards = [

    {
        id: "campfire",
        correct: true,
        icon: "🔥",
        title: "Api dari aktivitas manusia"
    },


    {
        id: "dryvegetation",
        correct: true,
        icon: "🌾",
        title: "Rumput kering"
    },


    {
        id: "wind",
        correct: true,
        icon: "💨",
        title: "Angin kencang"
    },


    {
        id: "rain",
        correct: false,
        icon: "🌧️",
        title: "Hujan deras"
    },


    {
        id: "dryweather",
        correct: true,
        icon: "☀️",
        title: "Cuaca kering"
    },


    {
        id: "litter",
        correct: true,
        icon: "🍂",
        title: "Daun kering"
    },


    {
        id: "river",
        correct: false,
        icon: "🌊",
        title: "Sungai berair"
    },


    {
        id: "cigarette",
        correct: true,
        icon: "🚬",
        title: "Puntung rokok"
    }

];


const level2Cards = [

    {
        id: "campfire",
        name: "Api dari aktivitas manusia",
        icon: "🔥",
        category: "human"
    },


    {
        id: "dryweather",
        name: "Cuaca kering",
        icon: "☀️",
        category: "environment"
    },


    {
        id: "wind",
        name: "Angin kencang",
        icon: "💨",
        category: "environment"
    },


    {
        id: "dryvegetation",
        name: "Rumput kering",
        icon: "🌾",
        category: "fuel"
    },


    {
        id: "cigarette",
        name: "Puntung rokok",
        icon: "🚬",
        category: "human"
    },


    {
        id: "litter",
        name: "Serasah kering",
        icon: "🍂",
        category: "fuel"
    }

];


const actions = [

    {
        text: "Melakukan pemantauan kondisi hutan",
        correct: true,
        icon: "🔎"
    },


    {
        text: "Membakar vegetasi agar cepat bersih",
        correct: false,
        icon: "🔥"
    },


    {
        text: "Mengurangi bahan bakar kering di area yang dikelola",
        correct: true,
        icon: "🌿"
    },


    {
        text: "Membuang puntung rokok sembarangan",
        correct: false,
        icon: "🚬"
    }

];
