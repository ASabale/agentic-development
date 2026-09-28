/* ==========================================================================
   loop-sim.js — beat-by-beat walkthrough of a scripted "weather clerk"
   agent, for lesson 0002 (Tools in a loop).

   Builds its entire UI into <div id="loop-sim" class="sim"></div>.
   Nothing calls a real API: the model is fake, the tool is a canned
   result — the point is the division of labor, beat by beat:

     1. You    → model:            context (instruction + tool schema)
     2. model  → you:              a tool call (structured intent, not action)
     3. harness→ you:              executes the call, gets a result
     4. You    → model:            append the observation, paired by id
     5. model  → you:              the final answer; loop stops

   No dependencies. Works from file://.
   ========================================================================== */
(function () {
  "use strict";

  var BEATS = [
    {
      role: "you",
      title: "You → model: send the context",
      html:
        "<p>You send one message: <code>“What’s the weather in Paris?”</code> plus the tool schema " +
        "<code>get_weather(city: string) → { temp: number }</code>.</p>" +
        "<p>That whole block — instruction, schema, history — is the <em>context</em>. " +
        "It goes out with the call and comes back with the answer. Nothing else does.</p>"
    },
    {
      role: "model",
      title: "Model → you: a tool call, not an action",
      html:
        "<p>The model returns structured output, not English:</p>" +
        "<pre>{\n  \"name\": \"get_weather\",\n  \"arguments\": { \"city\": \"Paris\" },\n  \"id\": \"call_1\"\n}</pre>" +
        "<p>It <em>emitted an intent</em>. It did not run anything — an LLM cannot. " +
        "Note the <code>id</code>: the receipt your harness will match against.</p>"
    },
    {
      role: "harness",
      title: "Harness: execute the call",
      html:
        "<p>Your code receives the JSON and runs a real function: " +
        "<code>get_weather(\"Paris\")</code> → <code>{ \"temp\": 25 }</code>.</p>" +
        "<p>The model never touches the function; the harness does. This is the seam " +
        "where the world actually changes — and where you own every failure mode.</p>"
    },
    {
      role: "you",
      title: "You: append the observation",
      html:
        "<p>The result goes back into the context as an observation, paired by id:</p>" +
        "<pre>{\n  \"tool_call_id\": \"call_1\",\n  \"content\": { \"temp\": 25 }\n}</pre>" +
        "<p>The transcript is now longer: message, tool call, observation. " +
        "The next request sends all of it. This is the loop.</p>"
    },
    {
      role: "model",
      title: "Model → you: the answer",
      html:
        "<p>Reading the observation, the model answers: <code>“25°C in Paris.”</code></p>" +
        "<p>No tool call this time — only a final answer. That is the loop’s exit: " +
        "the model stopped calling, so your harness stops calling back.</p>"
    }
  ];

  var DONE_NOTE =
    "Loop stopped: the model emitted a final answer with no tool call. " +
    "Five beats, two model calls, one tool run — and you wrote the middle half.";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function buildBeat(beat) {
    var entry = el("div", "sim-entry");
    var chip = el("span", "sim-role " + beat.role,
      beat.role === "you" ? "you" : beat.role.charAt(0).toUpperCase() + beat.role.slice(1));
    var body = el("div", "sim-body");
    body.innerHTML = beat.html;
    entry.appendChild(chip);
    entry.appendChild(body);
    return entry;
  }

  function init() {
    var root = document.getElementById("loop-sim");
    if (!root) return;
    root.innerHTML = "";

    var head = el("div", "sim-head");
    var stepLabel = el("span", "sim-step");
    var titleLabel = el("span", "sim-title");
    head.appendChild(stepLabel);
    head.appendChild(titleLabel);
    root.appendChild(head);

    var transcript = el("div", "sim-transcript");
    root.appendChild(transcript);

    var controls = el("div", "sim-controls");
    var nextBtn = el("button", "sim-btn primary", "Next beat →");
    nextBtn.type = "button";
    var restartBtn = el("button", "sim-btn ghost", "↺ restart");
    restartBtn.type = "button";
    controls.appendChild(nextBtn);
    controls.appendChild(restartBtn);
    root.appendChild(controls);

    var note = el("div", "sim-note");
    note.style.display = "none";
    root.appendChild(note);

    var step = 0; // number of beats revealed

    function render() {
      stepLabel.textContent =
        step === 0
          ? "Ready"
          : "Beat " + step + " of " + BEATS.length;
      titleLabel.textContent = step === 0 ? "Press next to begin" : BEATS[step - 1].title;

      while (transcript.children.length > step) {
        transcript.removeChild(transcript.lastChild);
      }
      while (transcript.children.length < step) {
        var entry = buildBeat(BEATS[transcript.children.length]);
        transcript.appendChild(entry);
      }
      Array.prototype.forEach.call(transcript.children, function (entry, i) {
        entry.classList.toggle("current", i === step - 1);
        entry.classList.toggle("done", i < step - 1);
      });

      var finished = step === BEATS.length;
      nextBtn.disabled = finished;
      nextBtn.textContent = finished ? "Done" : "Next beat →";
      note.style.display = finished ? "" : "none";
      note.textContent = finished ? DONE_NOTE : "";
    }

    nextBtn.addEventListener("click", function () {
      if (step < BEATS.length) {
        step += 1;
        render();
      }
    });

    restartBtn.addEventListener("click", function () {
      step = 1;
      render();
    });

    step = 1; // beat one is visible on load; four clicks to feel the loop
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();