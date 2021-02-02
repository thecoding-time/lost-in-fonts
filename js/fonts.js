function nextLevel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height),
      (gameState = "playing"),
      drawborders(),
      score >= 1 &&
        ((count = 30),
        score > 10 && (count = 20),
        score > 20 && (count = 10),
        (counting = !0),
        (counting = !0)),
      getAnswer(),
      buildQuestion(),
      buildOptions(),
      getNames();
  }
  function timer() {
    count--,
      1 == counting &&
        ((ctx.font = "30px consolas"),
        (ctx.fillStyle = "red"),
        ctx.clearRect((4 * canvasWidth) / 5 + 70, 0, 50, 50),
        ctx.fillText(count, (4 * canvasWidth) / 5 + 70 + 0, 30),
        0 == count && gameOver());
  }
  function Start() {
    document.getElementById("myCanvas").getContext("2d"),
      (document.getElementById("myCanvas").style.background = "black"),
      (document.getElementById("myCanvas").height = canvasHeight),
      (document.getElementById("myCanvas").width = canvasWidth);
  }
  function mainScreen() {
    (ctx.font = "40px consolas"),
      (ctx.fillStyle = "white"),
      ctx.fillText(
        "Lost in",
        canvasWidth / 2 - 130,
        (2 * canvasHeight) / 5
      ),
      ctx.beginPath(),
      (ctx.fillStyle = "red"),
      ctx.fillText("F", 380, (2 * canvasHeight) / 5),
      ctx.beginPath(),
      (ctx.fillStyle = "yellow"),
      ctx.fillText("o", 400, (2 * canvasHeight) / 5),
      ctx.beginPath(),
      (ctx.fillStyle = "lime"),
      ctx.fillText("n", 420, (2 * canvasHeight) / 5),
      ctx.beginPath(),
      (ctx.fillStyle = "aqua"),
      ctx.fillText("t", 440, (2 * canvasHeight) / 5),
      (ctx.font = "15px consolas"),
      ctx.beginPath(),
      (ctx.fillStyle = "white"),
      ctx.fillText(
        "If on mobile, rotate device",
        canvasWidth / 2 - 115,
        (3 * canvasHeight) / 5 + 30
      ),
      (ctx.font = "15px consolas"),
      ctx.beginPath(),
      (ctx.fillStyle = "gray"),
      ctx.fillText(
        "click here to continue...",
        canvasWidth / 2 - 110,
        (4 * canvasHeight) / 5 + 20
      ),
      document.getElementById("myCanvas").addEventListener(
        "click",
        function (e) {
          "main" == gameState
            ? (nextLevel(), drawScore(), (gameState = "playing"))
            : "gameover" == gameState &&
              ((score = 0),
              nextLevel(),
              drawScore(),
              (gameState = "playing"));
        },
        !1
      );
  }
  function gameOver() {
    (gameState = "gameover"),
      (counting = !1),
      score > highscore && (highscore = score),
      ctx.clearRect(0, 0, canvas.width, canvas.height),
      drawborders(),
      (ctx.font = "40px consolas"),
      (ctx.fillStyle = "white"),
      ctx.fillText(
        "Game Over",
        canvasWidth / 2 - 100,
        (2 * canvasHeight) / 5
      ),
      (ctx.font = "20px consolas"),
      ctx.beginPath(),
      (ctx.fillStyle = "white"),
      ctx.fillText(
        "Highscore: " + highscore,
        canvasWidth / 2 - 70,
        (3 * canvasHeight) / 5 + 30
      ),
      (ctx.font = "15px consolas"),
      ctx.beginPath(),
      (ctx.fillStyle = "white"),
      ctx.fillText(
        "click here to try again!",
        canvasWidth / 2 - 100,
        (4 * canvasHeight) / 5 + 20
      );
  }
  function drawborders() {
    ctx.beginPath(),
      (ctx.lineWidth = "3"),
      (ctx.strokeStyle = "white"),
      ctx.rect(
        (2 * canvasWidth) / 16,
        canvasHeight / 5,
        (3 * canvasWidth) / 4,
        140
      ),
      ctx.stroke(),
      ctx.beginPath(),
      (ctx.lineWidth = "3"),
      (ctx.strokeStyle = "white"),
      ctx.rect(
        (2 * canvasWidth) / 16 - 10,
        canvasHeight / 5 - 10,
        (3 * canvasWidth) / 4 + 20,
        160
      ),
      ctx.stroke(),
      ctx.beginPath(),
      (ctx.lineWidth = "3"),
      (ctx.strokeStyle = "white"),
      ctx.rect(
        (2 * canvasWidth) / 16 - 10,
        (4 * canvasHeight) / 5 - 20,
        (3 * canvasWidth) / 4 + 20,
        80
      ),
      ctx.stroke();
  }
  function drawScore() {
    (ctx.font = "30px consolas"),
      (ctx.fillStyle = "white"),
      ctx.fillText(score, 20, 30);
  }
  function getAnswer() {
    (answerTextNum = Math.floor(Math.random() * VC.length)),
      (answerText = VN[answerTextNum]),
      (answerColorNum = Math.floor(Math.random() * VN.length)),
      (answerColor = VC[answerColorNum]);
  }
  function drawAnswer() {
    var e = document.getElementById("myCanvas").getContext("2d");
    (e.font = "20px consolas"),
      (e.fillStyle = answerColor),
      e.fillText("The answer is:  " + answerText, 50, 50),
      Math.floor(Math.random() * VC.length);
  }
  function buildOptions() {
    (CommonNames[0] = VN[VC.indexOf(document.getElementById("w1").color)]),
      (CommonNames[1] =
        VN[VC.indexOf(document.getElementById("w2").color)]),
      (CommonNames[2] = word1),
      (CommonNames[3] =
        VN[VC.indexOf(document.getElementById("w1").color)]),
      (CommonNames[4] =
        VN[VC.indexOf(document.getElementById("w2").color)]),
      (CommonNames[5] = word2),
      (CommonNames[6] = word2),
      (CommonNames[7] =
        VN[VC.indexOf(document.getElementById("w2").color)]),
      (CommonNames[8] = word1),
      (CommonNames[9] =
        VN[VC.indexOf(document.getElementById("w1").color)]),
      (CommonColours[0] = VC[VN.indexOf(word2)]),
      (CommonColours[1] = VC[VN.indexOf(word2)]),
      (CommonColours[2] = VC[VN.indexOf(word2)]),
      (CommonColours[3] = VC[VN.indexOf(word1)]),
      (CommonColours[4] = VC[VN.indexOf(word1)]),
      (CommonColours[5] = VC[VN.indexOf(word1)]),
      (CommonColours[6] = document.getElementById("w1").color),
      (CommonColours[7] = document.getElementById("w1").color),
      (CommonColours[8] = document.getElementById("w2").color),
      (CommonColours[9] = document.getElementById("w2").color);
  }
  function buildQuestion() {
    var e = Math.floor(Math.random() * VN.length);
    (word1 = VN[e]),
      (word1 =
        e == answerTextNum
          ? e == VN.length - 1
            ? VN[e - 1]
            : VN[e + 1]
          : VN[e]),
      (word2 = VN[answerColorNum]),
      (document.getElementById("w1").color = VC[answerTextNum]);
    var t = Math.floor(Math.random() * VC.length);
    (document.getElementById("w2").color = VC[t]),
      t == answerColorNum
        ? t == VC.length - 1
          ? (document.getElementById("w2").color = VC[t - 1])
          : (document.getElementById("w2").color = VC[t + 1])
        : (document.getElementById("w2").color = VC[t]),
      (ctx.font = "15px consolas"),
      (ctx.fillStyle = document.getElementById("w1").color),
      ctx.fillText(
        word1,
        (11 * canvasWidth) / 16,
        (4 * canvasHeight) / 5 + 40
      ),
      (ctx.font = "15px consolas"),
      (ctx.fillStyle = document.getElementById("w2").color),
      ctx.fillText(word2, (11 * canvasWidth) / 16, (4 * canvasHeight) / 5),
      drawQuestionText();
  }
  function drawQuestionText() {
    (ctx.font = "15px consolas"),
      (ctx.fillStyle = "white"),
      ctx.fillText(
        "The answer's colour is equal to the text of: ",
        (2 * canvasWidth) / 16,
        (4 * canvasHeight) / 5
      ),
      (ctx.fillStyle = "white"),
      ctx.fillText(
        "The answer's text is equal to the colour of: ",
        (2 * canvasWidth) / 16,
        (4 * canvasHeight) / 5 + 40
      );
  }
  function getNames() {
    ctx.font = "20px consolas";
    var e = [""],
      t = [""];
    for (
      e[0] = answerText,
        t[0] = answerColor,
        console.log(CommonNames),
        console.log(CommonColours),
        CommonNames.splice(CommonNames.indexOf(answerText), 1),
        CommonColours.splice(CommonColours.indexOf(answerColor), 1),
        i = 1;
      i < 6;
      i++
    ) {
      var o = Math.floor(Math.random() * CommonNames.length);
      (e[i] = CommonNames[o]),
        (t[i] = CommonColours[o]),
        CommonNames.splice(o, 1),
        CommonColours.splice(o, 1);
    }
    for (i = 0; i < 6; i++) {
      var n = Math.floor(Math.random() * e.length);
      (CN[i] = e[n]),
        (CC[i] = t[n]),
        e.splice(n, 1),
        t.splice(n, 1),
        (ctx.fillStyle = CC[i]),
        ctx.fillText(CN[i], posx[i] - (10 * CN[i].length) / 2, posy[i]);
    }
  }
  var VN = ["red", "orange", "yellow", "green", "blue", "purple", "pink"],
    VC = [
      "red",
      "darkorange",
      "yellow",
      "lime",
      "aqua",
      "darkviolet",
      "hotpink",
    ],
    canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d"),
    canvasHeight = "375",
    canvasWidth = "667",
    posx = [
      canvasWidth / 4,
      canvasWidth / 2,
      (3 * canvasWidth) / 4,
      canvasWidth / 4,
      canvasWidth / 2,
      (3 * canvasWidth) / 4,
    ],
    posy = [115, 115, 115, 185, 185, 185],
    CN = [""],
    CC = [""],
    CommonNames = [""],
    CommonColours = [""],
    answerText = "",
    answerColor = "",
    answerTextNum = 0,
    answerColorNum = 0,
    optionsList = [""],
    score = 0,
    highscore = 0,
    count = 1,
    word1 = "",
    word2 = "",
    gameState = "main",
    counting = !1;
  Start(), mainScreen();
  var myVar = setInterval(timer, 1e3);
  drawborders();
  var elem = document.getElementById("myCanvas");
  elem.addEventListener(
    "click",
    function (e) {
      var t = (2 * canvasWidth) / 16,
        o = (2 * canvasWidth) / 16 + (3 * canvasWidth) / 4 / 3,
        n = (2 * canvasWidth) / 16 + (((3 * canvasWidth) / 4) * 2) / 3,
        a = (2 * canvasWidth) / 16 + (3 * canvasWidth) / 4,
        c = canvasHeight / 5,
        l = canvasHeight / 5 + 70,
        r = canvasHeight / 5 + 140,
        s = elem.offsetLeft,
        i = e.pageX - s,
        m = e.pageY;
      "main" == gameState
        ? (nextLevel(), drawScore(), (gameState = "playing"))
        : "gameover" == gameState
        ? ((myVar = setInterval(timer, 1e3)),
          nextLevel(),
          (score = 0),
          drawScore())
        : "playing" == gameState &&
          (i >= t && o >= i
            ? m >= c && l >= m
              ? CN[0] == answerText && CC[0] == answerColor
                ? (score++, nextLevel(), drawScore())
                : gameOver()
              : m >= l &&
                r >= m &&
                (CN[3] == answerText && CC[3] == answerColor
                  ? (score++, nextLevel(), drawScore())
                  : gameOver())
            : i >= o && n >= i
            ? m >= c && l >= m
              ? CN[1] == answerText && CC[1] == answerColor
                ? (score++, nextLevel(), drawScore())
                : gameOver()
              : m >= l &&
                r >= m &&
                (CN[4] == answerText && CC[4] == answerColor
                  ? (score++, nextLevel(), drawScore())
                  : gameOver())
            : i >= n &&
              a >= i &&
              (m >= c && l >= m
                ? CN[2] == answerText && CC[2] == answerColor
                  ? (score++, nextLevel(), drawScore())
                  : gameOver()
                : m >= l &&
                  r >= m &&
                  (CN[5] == answerText && CC[5] == answerColor
                    ? (score++, nextLevel(), drawScore())
                    : gameOver())));
    },
    !1
  );