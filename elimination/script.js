let eliminationAnswer = [];
let state = {};

function postEliminationAnswer(name, answer) {

    $.ajax({
        url: 'https://api.raxtus.net/eliminations',
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json',
        data: JSON.stringify({                  
            name: name,
            ans: answer
        }),
        success: function (result) {
            console.log(result);
        }, error: function (error) {
            console.log(error);
        }
    });
}


function getEliminations() {

    $.ajax({
        url: 'https://api.raxtus.net/eliminations',
        type: 'GET',
        crossDomain: true,
        success: function (result) {
            //Tutaj zwraca JSON'a z wynikami eliminacji
            eliminationAnswer = result;
            console.log(eliminationAnswer);
        }, error: function (error) {

            console.log(error);

        }
    });
}

function deleteEliminations() {

    $.ajax({
        url: 'https://api.raxtus.net/eliminations',
        type: 'DELETE',
        crossDomain: true,
        success: function (result) {

            console.log(result);
        }
        , error: function (error) {

            console.log(error);
        }
    });
}

function putStateOpen() {

    $.ajax({
        url: 'https://api.raxtus.net/eliminations/open',
        type: 'PUT',
        crossDomain: true,
        success: function (result) {

            console.log(result);
        }
        , error: function (error) {

            console.log(error);
        }
    });
}

function putStateClose() {

    $.ajax({
        url: 'https://api.raxtus.net/eliminations/close',
        type: 'PUT',
        crossDomain: true,
        success: function (result) {

            console.log(result);
        }
        , error: function (error) {

            console.log(error);
        }
    });
}

function postAnswer(answer) {

    $.ajax({
        url: 'https://api.raxtus.net/vote',
        type: 'POST',
        crossDomain: true,
        data: {
            answer: answer
        },
        success: function (result) {

            console.log(result);
            alert("Wysłano");
        }
        , error: function (error) {

            console.log(error)
            alert("błąd");
        }
    });
}
