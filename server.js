let eliminationAnswer = [];
let state = {};

function postEliminationAnswer(name, answer) {

    $.ajax({
        url: 'https://pilio.t1s.pl/eliminations',
        type: 'POST',
        data: {
            name: name,
            answer: answer
        },
        success: function (result) {

            console.log(result);
        }, error: function (error) {

            console.log(error);

        }
    });
}


function getEliminations() {

    $.ajax({
        url: 'https://pilio.t1s.pl/eliminations',
        type: 'GET',
        success: function (result) {
            //Tutaj zwraca JSON'a z wynikami eliminacji
            eliminationAnswer = result;
            console.log(eliminationAnswer)
        }, error: function (error) {

            console.log(error)

        }
    });
}



function deleteEliminations() {

    $.ajax({
        url: 'https://pilio.t1s.pl/eliminations',
        type: 'DELETE',
        success: function (result) {

            console.log(result)
        }
        , error: function (error) {

            console.log(error)
        }
    });
}



function getState() {

    $.ajax({
        url: 'https://pilio.t1s.pl/state',
        type: 'GET',
        success: function (result) {
            state = result;
            console.log(state);
      
        }
        , error: function (error) {

            console.log(error)
        }
    });
}



function putStateOpen() {

    $.ajax({
        url: 'https://pilio.t1s.pl/state/open',
        type: 'PUT',
        success: function (result) {

            console.log(result)
        }
        , error: function (error) {

            console.log(error)
        }
    });
}

function putStateClose() {

    $.ajax({
        url: 'https://pilio.t1s.pl/state/close',
        type: 'PUT',
        success: function (result) {

            console.log(result)
        }
        , error: function (error) {

            console.log(error)
        }
    });
}


function putState(question) {

    $.ajax({
        url: 'https://pilio.t1s.pl/state',
        type: 'PUT',
        data: {
            question: question
        },
        success: function (result) {

            console.log(result)
        }
        , error: function (error) {

            console.log(error)
        }
    });
}


function postAnswer(answer) {

    $.ajax({
        url: 'https://pilio.t1s.pl/answer',
        type: 'PUT',
        data: {
            answer: answer
        },
        success: function (result) {

            console.log(result)
            alert("Wysłano")
        }
        , error: function (error) {

            console.log(error)
            alert("błąd");
            document.cookie = "sended=false";
        }
    });
}