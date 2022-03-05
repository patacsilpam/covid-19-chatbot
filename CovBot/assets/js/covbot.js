document.getElementById('user-area-message').style.display = 'none';
document.getElementById('get-started').style.display = 'block';
document.getElementById('what-is-covid').style.display = 'block';
document.getElementById('btn-send').style.display = 'none';
//get user message value
const getUserMessage = () => {
        document.getElementById('user-message').addEventListener("keyup", e => {
            if (e.target.value == "") {
                document.getElementById('btn-send').style.display = 'none';
            } else {
                document.getElementById('btn-send').style.display = 'block';
            }
        });
    }
    //send message
const sendMessage = () => {
    document.getElementById('btn-send').addEventListener("click", function() {
        const userMessage = document.getElementById('user-message').value;
        const resetValue = document.getElementById('user-message');
        let userHTML = '<div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
        console.log(resetValue.value);
        resetValue.value = '';
        document.querySelector('.container').innerHTML += userHTML;
        document.getElementById('btn-send').style.display = 'none';
        //query 
        let xhr = new XMLHttpRequest;
        xhr.open("POST", "php/query.php");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(`userInput=${userMessage}`);
        //display bot typing in a second
        const botTyping = document.getElementById('bot-typing');
        setTimeout(() => {
            botTyping.style.display = 'flex';
            document.querySelector('.container').append(botTyping);
        }, 0010);
        xhr.onload = function() {
            setTimeout(() => {
                botTyping.style.display = 'none';
                document.querySelector('.container').append(botTyping);
                let botHtml = '<div class="bot-section">' + '<img src="assets/img/bot.png" class="img-user">' + '<p class="messages bot-reply">' + this.responseText + '</p>' + '</div></br>';
                document.querySelector('.container').innerHTML += botHtml;
                document.querySelector('.container').lastChild.scrollIntoView(false);
            }, 1500);
        };
    });
}

//get started button onclick
const getStarted = () => {
    const start = document.getElementById('get-started');
    const textArea = document.getElementById('user-area-message');

    start.style.display = 'none';
    textArea.style.display = 'flex';
    const userMessage = document.getElementById('get-started').value; //get started value
    let userHTML = '<div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    //confirm(1);
    const botTyping = document.getElementById('bot-typing');
    const gettingStarted = document.getElementById('getting-started');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        gettingStarted.style.display = 'block';
        document.querySelector('.container').append(gettingStarted);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);

}
document.getElementById("what-is-covid").addEventListener("click", getStarted);
//what is covid 19 onclick button
const whatIsCovid = () => {
        const userMessage = document.getElementById('what-is-covid').value;
        let userHTML = '<div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
        document.querySelector('.container').innerHTML += userHTML;
        document.querySelector('.container').lastChild.scrollIntoView(false);
        //
        const botTyping = document.getElementById('bot-typing');
        const covid19 = document.getElementById('covid-19');
        const botMenus = document.querySelectorAll('.bot-menu');
        setTimeout(() => {
            botTyping.style.display = 'flex';
            document.querySelector('.container').append(botTyping);
            for (let i = 0; i <= botMenus.length; i++) {
                botMenus[0].style.backgroundColor = '#44547E';
                botMenus[0].style.color = '#ffffff';
                botMenus[i].disabled = true;
                document.querySelector('.container').lastChild.scrollIntoView(false);
            }
        }, 0010);
        setTimeout(() => {
            botTyping.style.display = 'none';
            document.querySelector('.container').append(botTyping);
            covid19.style.display = 'block';
            document.querySelector('.container').append(covid19);
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }, 1500);

    }
    //screening test
const screeningTest = () => {
    const userMessage = document.getElementById('screening-test').value;
    let userHTML = '<div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing')
    const botMenus = document.querySelectorAll('.bot-menu');
    const screenTest = document.getElementById('screen-test');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < botMenus.length; i++) {
            botMenus[1].style.backgroundColor = '#44547E';
            botMenus[1].style.color = '#ffffff';
            botMenus[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        screenTest.style.display = 'flex';
        document.querySelector('.container').append(screenTest);
        document.querySelector('.container').lastChild.scrollIntoView(false);

    }, 1500);

}
document.getElementById('screening-test').addEventListener("click", screeningTest);
//what is covid 19
document.getElementById("what-is-covid").addEventListener("click", whatIsCovid);

const feelingSick = () => {
    const userMessage = document.getElementById('feel-sick').value;
    let userHTML = '<div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const sick = document.getElementById('sick');
    const botMenus = document.querySelectorAll('.bot-menu');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < botMenus.length; i++) {
            botMenus[2].style.backgroundColor = '#44547E';
            botMenus[2].style.color = '#ffffff';
            botMenus[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        sick.style.display = 'block';
        document.querySelector('.container').append(sick);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('feel-sick').addEventListener("click", feelingSick);
//vaccinated == "Yes"
const iAmVaccinated = () => {
    const userMessage = document.getElementById('vaccinated').value;
    let userHTML = '</br><div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const buttons = document.querySelectorAll('.btn-vaccinated');
    const covidTest = document.getElementById('covid-test');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < buttons.length; i++) {
            buttons[0].style.backgroundColor = '#44547E';
            buttons[0].style.color = '#ffffff';
            buttons[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        covidTest.style.display = 'flex';
        document.querySelector('.container').append(covidTest);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('vaccinated').addEventListener("click", iAmVaccinated);
//vaccinated == "No"
const notVaccinated = () => {
    const userMessage = document.getElementById('not-vaccinated').value;
    let userHTML = '</br><div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const buttons = document.querySelectorAll('.btn-vaccinated');
    const covidTest = document.getElementById('covid-test');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < buttons.length; i++) {
            buttons[1].style.backgroundColor = '#44547E';
            buttons[1].style.color = '#ffffff';
            buttons[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        covidTest.style.display = 'flex';
        document.querySelector('.container').append(covidTest);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('has-no-covid').addEventListener("click", notVaccinated);
//has covid 19 virus
const hasCovid = () => {
    const userMessage = document.getElementById('has-covid').value;
    let userHTML = '</br><div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const buttons = document.querySelectorAll('.btn-Covid');
    const call911 = document.getElementById('call-911');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < buttons.length; i++) {
            buttons[0].style.backgroundColor = '#44547E';
            buttons[0].style.color = '#ffffff';
            buttons[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        call911.style.display = 'flex'
        document.querySelector('.container').append(call911);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}

document.getElementById('has-covid').addEventListener("click", hasCovid);
//has no covid 19 viruusss
const hasNoCovid = () => {
    const userMessage = document.getElementById('has-no-covid').value;
    let userHTML = '</br><div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const buttons = document.querySelectorAll('.btn-Covid');
    const wentOutside = document.getElementById('went-outside');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < buttons.length; i++) {
            buttons[1].style.backgroundColor = '#44547E';
            buttons[1].style.color = '#ffffff';
            buttons[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        wentOutside.style.display = 'flex'
        document.querySelector('.container').append(wentOutside);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('has-no-covid').addEventListener("click", hasNoCovid);

//I DID TRAVEL :D
const didTravel = () => {
    const userMessage = document.getElementById('did-travel').value;
    let userHTML = '</br><div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const buttons = document.querySelectorAll('.btn-Travel');
    const symptoms = document.getElementById('symptoms');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < buttons.length; i++) {
            buttons[0].style.backgroundColor = '#44547E';
            buttons[0].style.color = '#ffffff';
            buttons[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        symptoms.style.display = 'flex';
        document.querySelector('.container').append(symptoms);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 0010);
}
document.getElementById('did-travel').addEventListener("click", didTravel)
    //did not ravel :()
const didNotTravel = () => {
    const userMessage = document.getElementById('did-not-travel').value;
    let userHTML = '</br><div class="user-section">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const buttons = document.querySelectorAll('.btn-Travel');
    const symptoms = document.getElementById('symptoms');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < buttons.length; i++) {
            buttons[1].style.backgroundColor = '#44547E';
            buttons[1].style.color = '#ffffff';
            buttons[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        symptoms.style.display = 'flex';
        document.querySelector('.container').append(symptoms);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 0010);
}
document.getElementById('did-not-travel').addEventListener("click", didNotTravel)
    //submit symptoms
const btnSubmit = () => {
    let checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
    let userMessage = [];
    checkboxes.forEach((checkbox) => {
        userMessage.push(checkbox.value);
    });
    let userHTML = '</br><div class="user-section user-symptoms">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const btnSubmit = document.getElementById('btn-submit-symptoms');
    const isolate = document.getElementById('isolation');
    const covidNeighbor = document.getElementById('covid-neighbor');
    const userSymptoms = document.querySelector('.user-symptoms').textContent;
    if (userSymptoms == "None of the above") {
        console.log(userSymptoms);
        setTimeout(() => {
            botTyping.style.display = 'flex';
            document.querySelector('.container').append(botTyping);
            btnSubmit.style.backgroundColor = '#44547E';
            btnSubmit.style.color = '#ffffff';
            btnSubmit.disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }, 0010);
        setTimeout(() => {
            botTyping.style.display = 'none';
            document.querySelector('.container').append(botTyping);
            covidNeighbor.style.display = 'flex';
            document.querySelector('.container').append(covidNeighbor);
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }, 1500);

    } else {
        setTimeout(() => {
            botTyping.style.display = 'flex';
            document.querySelector('.container').append(botTyping);
            btnSubmit.style.backgroundColor = '#44547E';
            btnSubmit.style.color = '#ffffff';
            btnSubmit.disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }, 0010);
        setTimeout3 = setTimeout(() => {
            botTyping.style.display = 'none';
            document.querySelector('.container').append(botTyping);
            isolate.style.display = 'flex';
            document.querySelector('.container').append(isolate);
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }, 1500);
    }
}
document.getElementById('btn-submit-symptoms').addEventListener("click", btnSubmit)
    //live with someone who has a suspect covid patient
const hasCovNeighbor = () => {
    const userMessage = document.getElementById('has-covid-neighbor').value;
    let userHTML = '</br><div class="user-section user-symptoms">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const btnNeighbor = document.querySelectorAll('.btn-neighbor');
    const isolation = document.getElementById('isolation');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < btnNeighbor.length; i++) {
            btnNeighbor[0].style.backgroundColor = '#44547E';
            btnNeighbor[0].style.color = '#ffffff';
            btnNeighbor[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        isolation.style.display = 'flex';
        document.querySelector('.container').append(isolation);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('has-covid-neighbor').addEventListener("click", hasCovNeighbor);
////live with someone who has no suspect covid patient
const noneCovNeighbor = () => {
    const userMessage = document.getElementById('none-cov-neighbor').value;
    let userHTML = '</br><div class="user-section user-symptoms">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const btnNeighbor = document.querySelectorAll('.btn-neighbor');
    const antiGenTest = document.getElementById('antigen-test');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < btnNeighbor.length; i++) {
            btnNeighbor[1].style.backgroundColor = '#44547E';
            btnNeighbor[1].style.color = '#ffffff';
            btnNeighbor[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        antiGenTest.style.display = 'flex';
        document.querySelector('.container').append(antiGenTest);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('none-cov-neighbor').addEventListener("click", noneCovNeighbor);
//positive in antigen or rapid test
const didAntigen = () => {
    const userMessage = document.getElementById('did-antigen').value;
    let userHTML = '</br><div class="user-section user-symptoms">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const isolation = document.getElementById('isolation');
    const btnAntigen = document.querySelectorAll('.btn-antigen');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < btnAntigen.length; i++) {
            btnAntigen[0].style.backgroundColor = '#44547E';
            btnAntigen[0].style.color = '#ffffff';
            btnAntigen[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }
    }, 0010);

    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        isolation.style.display = 'flex';
        document.querySelector('.container').append(isolation);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);

}
document.getElementById('did-antigen').addEventListener("click", didAntigen);
//negative in antigen or rapid test
const didNotAntiGen = () => {
    const userMessage = document.getElementById('did-not-antigen').value;
    let userHTML = '</br><div class="user-section user-symptoms">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const closeContact = document.getElementById('close-contact');
    const btnAntigen = document.querySelectorAll('.btn-antigen');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < btnAntigen.length; i++) {
            btnAntigen[1].style.backgroundColor = '#44547E';
            btnAntigen[1].style.color = '#ffffff';
            btnAntigen[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }

    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        closeContact.style.display = 'flex';
        document.querySelector('.container').append(closeContact);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('did-not-antigen').addEventListener("click", didNotAntiGen);
//has close contact covid 19 positive
const hasCloseContact = () => {
    const userMessage = document.getElementById('has-close-contact').value;
    let userHTML = '</br><div class="user-section user-symptoms">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const isolation = document.getElementById('isolation');
    const btnCloseContact = document.querySelectorAll('.btn-close-contact');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < btnCloseContact.length; i++) {
            btnCloseContact[0].style.backgroundColor = '#44547E';
            btnCloseContact[0].style.color = '#ffffff';
            btnCloseContact[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }

    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        isolation.style.display = 'flex';
        document.querySelector('.container').append(isolation);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('has-close-contact').addEventListener("click", hasCloseContact);
//has no close contact covid 19 positive
const noCloseContact = () => {
    const userMessage = document.getElementById('no-close-contact').value;
    let userHTML = '</br><div class="user-section user-symptoms">' + '<p class="messages user-reply">' + userMessage + '</p>' + '<img src="assets/img/user.png" class="img-user">' + '</div></br>';
    document.querySelector('.container').innerHTML += userHTML;
    document.querySelector('.container').lastChild.scrollIntoView(false);
    //
    const botTyping = document.getElementById('bot-typing');
    const isolation = document.getElementById('isolation');
    const btnCloseContact = document.querySelectorAll('.btn-close-contact');
    setTimeout(() => {
        botTyping.style.display = 'flex';
        document.querySelector('.container').append(botTyping);
        for (let i = 0; i < btnCloseContact.length; i++) {
            btnCloseContact[1].style.backgroundColor = '#44547E';
            btnCloseContact[1].style.color = '#ffffff';
            btnCloseContact[i].disabled = true;
            document.querySelector('.container').lastChild.scrollIntoView(false);
        }

    }, 0010);
    setTimeout(() => {
        botTyping.style.display = 'none';
        document.querySelector('.container').append(botTyping);
        isolation.style.display = 'flex';
        document.querySelector('.container').append(isolation);
        document.querySelector('.container').lastChild.scrollIntoView(false);
    }, 1500);
}
document.getElementById('no-close-contact').addEventListener("click", noCloseContact);

getUserMessage();
sendMessage();