<!---->
<div id="bot-typing" class="hide">
    <img src="assets/img/bot.png" alt="bot" id="img-bot" class="img-user">
    <img src="https://www.dcinfotech.com/html/admin/uploads/blog/1577516586loading.gif" id="img-typing" width="70px">
</div>
<!---->
<div id="getting-started" class="hide">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <p class="messages bot-reply" id="message">
            Hi. I'm here to help your answer your questions and provide resources to assist with your concerns on the
            COVID-19 strain of the Coronavirus.
            </br> How can I help?
        </p>
    </div>
    <div id="bot-container">
        <button type="button" onclick="whatIsCovid()" class="bot-menu" id="what-is-covid" name="question"
            value="What is Covid-19?">What is Covid 19?</button>
        <button type="button" onclick="screeningTest()" class="bot-menu" id="screening-test" name="screeningTest"
            value="Take a Covid-19 Screening Test">Take a Covid-19 Screening Test</button>
        <button type="button" onclick="feelingSick()" class="bot-menu" id="feel-sick" name="feelingSick"
            value="What to do if you are sick?">What to do if you are sick?</button>
    </div>
</div>
<!--What is covid 19?-->
<div id="covid-19" class="hide">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <p class="messages bot-reply" id="message">
            Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
            Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without
            special treatment. However, some will become seriously ill and require medical attention.
        </p>
    </div>
</div>
<div id="sick" class="hide">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <p class="messages bot-reply" id="message">
            Most people with flu have mild illness and do not need medical care or antiviral drugs. If you get sick with
            flu symptoms, in most cases, you should stay home and avoid contact with other people except to get medical
            care.
            If, however, you have symptoms of flu and are in a higher-risk group, or are very sick or worried about your
            illness, contact your health care provider (doctor, physician assistant, etc.).
            <a href="https://www.cdc.gov/flu/treatment/takingcare.htm" target="_blank" class="link">Read More</a>
        </p>
    </div>
</div>
<!--Are you vaccinated-->
<div class="hide" id="screen-test">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="assesment-messages bot-reply">
            <p>
                <img src="https://cdn.iconfinder.com/stored_data/275926/128/png?token=1646291648-9fN9S%2BckWISno7usR9t%2FkIoNgap2QJCIC4qeRqkUPGs%3D"
                    alt="Vaccine" width="25px">
                Are you <b>fully vacinated</b> against COVID-19?
            </p>
            <div class="button-section">
                <button class="buttons btn-vaccinated" id="vaccinated" onclick="iAmVaccinated()"
                    value="Yes">Yes</button>
                <button class="buttons btn-vaccinated" id="not-vaccinated" onclick="notVaccinated()"
                    value="No">No</button>
            </div>
        </div>
    </div>
</div>
<!--Covid Test-->
<div class="hide" id="covid-test">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="assesment-messages bot-reply">
            <p><img src="https://cdn.iconfinder.com/stored_data/275936/128/png?token=1646292256-0NueXNXx5iMhgfe93Vc1UhIpeaqvDE3RXNvXztlxUT0%3D"
                    alt="Vaccine" width="25px">
                Do you have any of these problems right now? If you're in risk, call 911.</p>
            <ul>
                <li>Severe difficulty breathing</li>
                <li>Severe chest pain</li>
                <li>Feeling confused or unsure of where you are</li>
                <li>Losing consciousness</li>
            </ul>
            <div class="button-section">
                <button class="buttons btn-Covid" id="has-covid" onclick="hasCovid()" value="Yes">Yes</button>
                <button class="buttons btn-Covid" id="has-no-covid" onclick="hasNoCovid()" value="No">No</button>
            </div>
        </div>
    </div>
</div>
<!--Call 911-->
<div class="hide" id="call-911">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="messages bot-reply">
            <p><i class="fa fa-phone" aria-hidden="true"></i>Based on your symptoms you may require immediate medical
                attention.Call 911 or drive to the nearest clinic.</p>
        </div>
    </div>
</div>
<!--Did you travel for the last 14 days outside the Philippines or went to crowded place-->
<div class="hide" id="went-outside">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="assesment-messages bot-reply">
            <p> <i class='fa fa-bus'></i>Did you travel for the last 14 days outside the Philippines or went to
                crowded area?</p>
            <div class="button-section">
                <button class="buttons btn-Travel" id="did-travel" onclick="didTravel()" value="Yes">Yes</button>
                <button class="buttons btn-Travel" id="did-not-travel" onclick="didNotTravel()" value="No">No</button>
            </div>
        </div>
    </div>
</div>
<!---Symptoms--->
<div class="hide" id="symptoms">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="assesment-messages bot-reply">
            <p><img src="https://cdn.iconfinder.com/stored_data/275943/128/png?token=1646292557-3kiAen%2FDEBLpUl29ec%2FFGUNm%2BCRHCDy%2BT9hzUKw4k7g%3D"
                    alt="days" width="25px">
                In the last 10 days have you experienced any of these symptoms?</p><br>
            <div class="checkbox-section">
                <div><input type="checkbox" name="symptoms" value="Fever and/or chills">Fever and/or chills <br></div>
                <div><input type="checkbox" name="symptoms" value="Cough or barking cough (croup)">Cough or barking
                    cough (croup)</div>
                <div><input type="checkbox" name="symptoms" value="Shortness of breath">Shortness of breath</div>
                <div><input type="checkbox" name="symptoms" value="Decrease or loss of taste or smell">Decrease or
                    loss of taste or
                    smell</div>
                <div><input type="checkbox" name="symptoms" value="Muscle aches/joint pain">Muscle aches/joint pain
                </div>
                <div><input type="checkbox" name="symptoms" value="Extreme tiredness">Extreme tiredness</div>
                <div><input type="checkbox" name="symptoms" value="Sore throat">Sore throat</div>
                <div><input type="checkbox" name="symptoms" value="Runny or stuffy/congested nose">Runny or
                    stuffy/congested nose</div>
                <div><input type="checkbox" name="symptoms" value="Headache">Headache</div>
                <div><input type="checkbox" name="symptoms" value="Nausea, vomiting and/or diarrhea">Nausea, vomiting
                    and diarrhea</div>
                <div><input type="checkbox" name="symptoms" id="none" value="None of the above">None of the above</div>
            </div>
            <div class="button-section">
                <button class="buttons btn-submit" id="btn-submit-symptoms" onclick="btnSubmit()">Submit</button>
            </div>
        </div>
    </div>
</div>
<!---Isolation-->
<div class="hide" id="isolation">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="messages bot-reply">
            <p><img src="https://cdn.iconfinder.com/stored_data/277616/128/png?token=1646372591-FCVv%2B%2Fh5WomuxVceCgKyuR6%2FbqRBoeEB3CXobHLyDeY%3D"
                    alt="isolate" width="25px"> Based on your answer, we recommend you self-isolate (stay home).
                Follow the advice of public health if you have already been cleared.</p>
        </div>
    </div>
</div>
<div class="hide" id="covid-neighbor">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="assesment-messages bot-reply">
            <p><img src="https://cdn.iconfinder.com/stored_data/277467/128/png?token=1646360854-y4utgh9yGjwwy1TOavwn387W8eRavGRxczh7E0GxBXs%3D"
                    alt="neighbor" width="25px">&nbsp;Do any of the following apply to you?</p>
            <ul>
                <li>You live with someone who is currently isolating because of a positive COVID-19 test</li>
                <li>You live with someone who is currently isolating because of COVID-19 symptoms</li>
                <li>You live with someone who is waiting for the results of a COVID-19 test.</li>
            </ul>
            <small>Select “No” if you completed your isolation after testing positive in the last 90 days (using a rapid
                antigen, rapid molecular, or PCR test).</small>
            <div class="button-section">
                <button class="buttons btn-neighbor" id="has-covid-neighbor" onclick="hasCovNeighbor()"
                    value="Yes">Yes</button>
                <button class="buttons btn-neighbor" id="none-cov-neighbor" onclick="noneCovNeighbor()"
                    value="No">No</button>
            </div>
        </div>
    </div>
</div>
<!--Antigen-->
<div class="hide" id="antigen-test">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="assesment-messages bot-reply">
            <p><img src="https://cdn.iconfinder.com/stored_data/277649/128/png?token=1646374929-4Uanol8ax19Zio1v7oI%2BWn6J1qTIFW8FDPHVHvEGs7s%3D"
                    alt="anti-gen" width="25px">&nbsp;In the last 10 days, have you tested positive on a rapid antigen
                test or home-based
                self-testing kit?</p>
            <small>Select “No” if you have already completed your isolation period of 10 days because your symptoms
                started before your positive test result, and:</small>
            <ul>
                <li>you do not have a fever, and</li>
                <li>your symptoms have been improving for 24 hours (48 hours for nausea, vomiting, and/or diarrhea)</li>
            </ul>
            <div class="button-section">
                <button class="buttons btn-antigen" id="did-antigen" onclick="didAntigen()" value="Yes">Yes</button>
                <button class="buttons btn-antigen" id="did-not-antigen" onclick="didNotAntiGen()"
                    value="No">No</button>
            </div>
        </div>
    </div>
</div>
<div class="hide" id="close-contact">
    <div class="bot-section">
        <img src="assets/img/bot.png" alt="bot" class="img-user">
        <div class="assesment-messages bot-reply">
            <p><img src="https://cdn.iconfinder.com/stored_data/277713/128/png?token=1646378320-YUv1xy3zogvtqNq5RZeOchIRZ3kN0LtsRJNZv%2BAOAR8%3D"
                    alt="anti-gen" width="25px">&nbsp;In the last 10 days, have you been identified as a “close contact”
                of someone who has tested positive for COVID-19 or has symptoms of COVID-19?</p>
            <small>Select “No” if any of the following apply:</small>
            <ul>
                <li>You are fully vaccinated, and not immunocompromised, and you do not live with the person who has
                    COVID-19</li>
                <li>You completed your isolation after testing positive in the last 90 days (using a rapid antigen,
                    rapid molecular, or PCR test)</li>
            </ul>
            <div class="button-section">
                <button class="buttons btn-close-contact" id="has-close-contact" onclick="hasCloseContact()" value="Yes">Yes</button>
                <button class="buttons btn-close-contact" id="no-close-contact" onclick="noCloseContact()" value="No">No</button>
            </div>
        </div>
    </div>
</div>