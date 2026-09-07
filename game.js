function getState() {

    return JSON.parse(
        localStorage.getItem("fireDetective")
    ) || {

        score: 0,

        found: [],

        levels: []

    };

}



function saveState(state) {

    localStorage.setItem(
        "fireDetective",
        JSON.stringify(state)
    );

}



function addScore(points) {

    const state = getState();

    state.score += points;

    saveState(state);


    const score =
        document.getElementById("score");


    if (score) {

        score.textContent =
            state.score;

    }

}



function discover(id) {

    const state = getState();


    if (!state.found.includes(id)) {

        state.found.push(id);

    }


    saveState(state);

}



function completeLevel(level) {

    const state = getState();


    if (!state.levels.includes(level)) {

        state.levels.push(level);

    }


    saveState(state);

}



function showFeedback(
    element,
    text,
    type = "good"
) {

    element.className =
        "feedback " + type;

    element.innerHTML =
        text;

}



/* =========================
   LEVEL 1
========================= */

function initLevel1() {

    const cards =
        document.getElementById("cards");

    const feedback =
        document.getElementById("feedback");

    const next =
        document.getElementById("next");


    let answered = 0;

    let correct = 0;


    cards.innerHTML =

        level1Cards.map(card => `

            <button
                class="factor-card"
                data-id="${card.id}"
                data-correct="${card.correct}">

                <span>
                    ${card.icon}
                </span>

                <strong>
                    ${card.title}
                </strong>

                <small>
                    Klik untuk menyelidiki
                </small>

            </button>

        `).join("");


    cards
        .querySelectorAll(".factor-card")
        .forEach(card => {


            card.onclick = function() {

                if (card.disabled) return;


                card.disabled = true;

                answered++;


                if (
                    card.dataset.correct
                    === "true"
                ) {

                    card.classList
                        .add("correct");

                    correct++;

                    addScore(10);

                    discover(
                        card.dataset.id
                    );


                    showFeedback(

                        feedback,

                        "✨ Benar! Kartu ini masuk ke catatan detektif."

                    );

                }

                else {

                    card.classList
                        .add("wrong");

                    addScore(-2);


                    showFeedback(

                        feedback,

                        "🌱 Bukan kartu yang dicari. Perhatikan perannya lagi.",

                        "warn"

                    );

                }


                if (
                    answered
                    === level1Cards.length
                ) {

                    completeLevel(1);

                    next.classList
                        .remove("hidden");


                    showFeedback(

                        feedback,

                        `🎉 Misi selesai! Kamu menemukan ${correct} faktor yang tepat.`

                    );

                }

            };

        });

}



/* =========================
   LEVEL 2
========================= */

function initLevel2() {

    const card =
        document.getElementById(
            "sortCard"
        );


    const feedback =
        document.getElementById(
            "sortFeedback"
        );


    let index = 0;

    let correct = 0;


    function renderCard() {

        if (
            index
            >= level2Cards.length
        ) {

            completeLevel(2);


            card.innerHTML = `

                <div class="done-card">

                    <div class="done-icon">
                        🎉
                    </div>

                    <h2>
                        Semua kartu selesai!
                    </h2>

                    <p>
                        ${correct}
                        dari
                        ${level2Cards.length}
                        kartu berhasil dikelompokkan.
                    </p>

                    <a
                        class="btn primary"
                        href="level3.html">

                        Lanjut Level 3 →

                    </a>

                </div>

            `;

            return;

        }


        const current =
            level2Cards[index];


        card.innerHTML = `

            <div class="sort-icon">

                ${current.icon}

            </div>

            <h2>

                ${current.name}

            </h2>

            <p>

                Kartu
                ${index + 1}
                dari
                ${level2Cards.length}

            </p>

        `;

    }


    document
        .querySelectorAll(".category")
        .forEach(button => {


            button.onclick =
            function() {

                const current =
                    level2Cards[index];


                if (
                    button.dataset.cat
                    === current.category
                ) {

                    correct++;

                    addScore(10);

                    discover(
                        current.id
                    );


                    showFeedback(

                        feedback,

                        "✅ Tepat! Kartu masuk ke kelompok yang benar."

                    );


                    index++;


                    setTimeout(
                        renderCard,
                        350
                    );

                }

                else {

                    addScore(-2);


                    showFeedback(

                        feedback,

                        "🔄 Belum tepat. Pikirkan apakah ini berasal dari manusia, lingkungan, atau bahan bakar.",

                        "warn"

                    );

                }

            };

        });


    renderCard();

}



/* =========================
   LEVEL 3
========================= */

function initLevel3() {

    const choices =
        document.getElementById(
            "choices"
        );


    const feedback =
        document.getElementById(
            "simFeedback"
        );


    const next =
        document.getElementById(
            "simNext"
        );


    const data = [

        {
            text:
            "Vegetasi kering + angin kencang",

            correct: true,

            icon: "🌾💨"
        },


        {
            text:
            "Hujan deras + tanah basah",

            correct: false,

            icon: "🌧️💧"
        },


        {
            text:
            "Suhu rendah + kelembapan tinggi",

            correct: false,

            icon: "❄️💧"
        }

    ];


    choices.innerHTML =

        data.map(
            (choice, index) => `

                <button
                    class="choice"
                    data-index="${index}">

                    <span>
                        ${choice.icon}
                    </span>

                    <b>
                        ${choice.text}
                    </b>

                </button>

            `
        ).join("");


    choices
        .querySelectorAll(".choice")
        .forEach(button => {


            button.onclick =
            function() {

                const choice =
                    data[
                        button.dataset.index
                    ];


                if (choice.correct) {

                    button.classList
                        .add("correct");

                    addScore(20);


                    discover(
                        "dryvegetation"
                    );

                    discover(
                        "wind"
                    );


                    completeLevel(3);


                    showFeedback(

                        feedback,

                        "🔥 Benar! Vegetasi kering dapat menjadi bahan bakar, sedangkan angin dapat membantu penyebaran api."

                    );


                    choices
                        .querySelectorAll("button")
                        .forEach(
                            b =>
                            b.disabled = true
                        );


                    next.classList
                        .remove("hidden");

                }

                else {

                    button.classList
                        .add("wrong");

                    addScore(-3);


                    showFeedback(

                        feedback,

                        "🌿 Coba lagi. Cari kombinasi kondisi yang lebih kering dan mendukung penyebaran api.",

                        "warn"

                    );

                }

            };

        });

}



/* =========================
   LEVEL 4
========================= */

function initLevel4() {

    const wrap =
        document.getElementById(
            "actions"
        );


    const feedback =
        document.getElementById(
            "actionFeedback"
        );


    const finish =
        document.getElementById(
            "finish"
        );


    let answered = 0;

    let good = 0;


    wrap.innerHTML =

        actions.map(
            (action, index) => `

                <button
                    class="action-card"
                    data-index="${index}">

                    <span>
                        ${action.icon}
                    </span>

                    <strong>
                        ${action.text}
                    </strong>

                </button>

            `
        ).join("");


    wrap
        .querySelectorAll(".action-card")
        .forEach(button => {


            button.onclick =
            function() {

                if (
                    button.disabled
                ) return;


                const action =
                    actions[
                        button.dataset.index
                    ];


                button.disabled =
                    true;

                answered++;


                if (action.correct) {

                    button.classList
                        .add("correct");

                    good++;

                    addScore(15);


                    showFeedback(

                        feedback,

                        "🛡️ Tepat! Tindakan ini mendukung upaya pencegahan."

                    );

                }

                else {

                    button.classList
                        .add("wrong");

                    addScore(-3);


                    showFeedback(

                        feedback,

                        "⚠️ Pilihan ini bukan tindakan pencegahan yang tepat.",

                        "warn"

                    );

                }


                if (
                    answered
                    === actions.length
                ) {

                    completeLevel(4);


                    finish.classList
                        .remove("hidden");


                    showFeedback(

                        feedback,

                        `🏆 Misi terakhir selesai! ${good} tindakan tepat berhasil kamu pilih.`

                    );

                }

            };

        });

}
