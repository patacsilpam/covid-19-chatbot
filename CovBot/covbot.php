<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/chatbot.css">
    <link rel="icon" href="assets/img/bot.png">
    <script src="assets/js/covbot.js" defer></script>
    <title>CovBot</title>
</head>

<body>
    <header id="header">
        <h1 id="chatbot-initial">C</h1>
        <p id="chatbot-name">CovBot</p>
    </header>
    <main class="container">
        <article id="user-section">
            <section id="messages user-reply"></section>
            <section class="separator"></section>
        </article>
        <article class="auto-bot-message">
            <section id="messages bot-reply"></section>
            <section class="separator"></section>
            <?php require './assets/template/tips.php'?>
        </article>
    </main>
    <footer id="btn-section">
        <section id="user-area-message">
            <input type="text" placeholder="Type message" name="userInput" id="user-message">
            <img src="assets/img/send_button.png" alt="send" id="btn-send">
        </section>
        <button type="button" onclick="getStarted()" id="get-started" value="Get Started"> Get Started</button>
    </footer>
</body>

</html>