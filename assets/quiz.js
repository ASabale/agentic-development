/* ==========================================================================
   quiz.js — self-checking quiz for the teaching workspace.

   Contract (markup lives in each lesson's HTML):
     <div class="quiz">
       <h2>...</h2>
       <div class="q" data-ans="1">
         <p class="qtext">Question?</p>
         <label><input type="radio" name="..."> Option A</label>
         <label class="ans"><input type="radio" name="..."> Option B (correct)</label>
         <label><input type="radio" name="..."> Option C</label>
         <div class="feedback ok">Why B is right.</div>
         <div class="feedback no">Why the pick is wrong.</div>
       </div>
       ...
     </div>

   Behavior:
   - The correct answer is the index of label.ans (data-ans is a fallback).
   - Choosing an option locks the question (retrieval practice is one-shot)
     and reveals the matching .feedback div via .correct/.wrong on .q.
   - When every question in a quiz is answered, a score line appears with a
     note and a reset link for a spaced second pass from memory.

   No dependencies. Works from file://.
   ========================================================================== */
(function () {
  "use strict";

  function initQuiz(quiz) {
    var questions = Array.prototype.slice.call(quiz.querySelectorAll(".q"));
    if (!questions.length) return;

    var scoreEl = document.createElement("div");
    scoreEl.className = "quiz-score";
    quiz.appendChild(scoreEl);

    var pending = questions.length;
    var correctCount = 0;

    function renderScore() {
      if (pending > 0) {
        scoreEl.innerHTML =
          "<span class='score-line'>" +
          questions.length +
          " questions. Answer from memory, then check — " +
          (pending) +
          " left.</span>";
        return;
      }
      var allRight = correctCount === questions.length;
      var note = allRight
        ? "clean sweep. the next lesson assumes it."
        : "re-read what you missed, then reset and recall it cold.";
      scoreEl.innerHTML =
        "<span class='score-line'><strong>" +
        correctCount + "/" + questions.length +
        "</strong> correct — " + note + "</span>";
      if (!allRight) {
        var reset = document.createElement("button");
        reset.type = "button";
        reset.className = "quiz-reset";
        reset.textContent = "\u21ba reset";
        reset.addEventListener("click", resetQuiz);
        scoreEl.appendChild(reset);
      }
    }

    function resetQuiz() {
      pending = questions.length;
      correctCount = 0;
      questions.forEach(function (q) {
        delete q.dataset.done;
        q.classList.remove("correct", "wrong");
        q.querySelectorAll("label").forEach(function (label) {
          label.classList.remove("picked");
          var input = label.querySelector("input");
          if (input) {
            input.checked = false;
            input.disabled = false;
          }
        });
      });
      renderScore();
    }

    questions.forEach(function (q) {
      var labels = Array.prototype.slice.call(q.querySelectorAll("label"));
      var ansIdx = labels.findIndex(function (label) {
        return label.classList.contains("ans");
      });
      if (ansIdx === -1 && q.dataset.ans !== undefined) {
        ansIdx = parseInt(q.dataset.ans, 10);
      }
      q._ansIdx = ansIdx;

      labels.forEach(function (label) {
        var input = label.querySelector("input");
        if (input) {
          input.addEventListener("change", function () {
            if (q.dataset.done) return;
            q.dataset.done = "1";
            var picked = labels.findIndex(function (l) {
              return l === label;
            });
            var correct = picked === q._ansIdx;
            q.classList.add(correct ? "correct" : "wrong");
            label.classList.add("picked");
            labels.forEach(function (l) {
              var i = l.querySelector("input");
              if (i) i.disabled = true;
            });
            if (correct) correctCount += 1;
            pending -= 1;
            renderScore();
          });
        }
      });
    });

    renderScore();
  }

  function init() {
    document.querySelectorAll(".quiz").forEach(initQuiz);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();