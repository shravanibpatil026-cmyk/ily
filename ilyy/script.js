function startJourney() {
    const hero = document.getElementById("hero");

    hero.classList.add("hide");

    setTimeout(function () {
        document.getElementById("story").scrollIntoView({
            behavior: "smooth"
        });
    }, 700);
}


function goToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function openLetter(letter) {
    letter.classList.toggle("open");
}


function showLetter() {
    const popup = document.getElementById("finalLetter");

    popup.classList.add("show");

    const text = `And somewhere, deep down, I have one little hope...

I hope you choose me.

I hope that during this month, you slowly start falling for me again. I hope you look at me the way you used to, feel that little spark again, and realise that maybe your heart still has a place for me.

I hope you'll choose to love me again — not because you promised me, not because you feel bad for me, but because your heart genuinely wants me.

And if I'm being completely honest...

I really, really want you to come back to me.

Not just as my best friend.
Not just as someone from my past.

I want you back as my person. ❤️

So, Prithvi...

Please come back.

Come back when you realise that you still want to tell me everything.
Come back when you miss the little things about us.
Come back when being with me feels like home again.

I promise I'm not asking you to have all the answers right now.

I just hope that somewhere during this month, your heart finds its way back to mine.

And if it does...

I hope you choose me, love me, and stay.

I hope we become happier than we ever were before.

I hope we laugh more, understand each other better, communicate instead of giving up, make countless memories, annoy each other forever, and one day look back at this month and say,

"I'm so glad we gave us another chance." 🥹❤️

I don't know what the future holds for us.

But if I could make one wish right now...

I'd wish for you to come back to me.
To choose me.
To love me again.
And for us to build something even more beautiful together.

Maybe this isn't the end of our story.

Maybe this is the part where we find our way back to each other. 🤍

And if you're reading this...

Please come back to me.
I still have so much love left for you. ❤️`;

    typeText(text);
}


function typeText(text) {
    const element = document.getElementById("typingText");

    element.innerHTML = "";

    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;

            setTimeout(type, 18);
        }
    }

    type();
}


function closeLetter() {
    document.getElementById("finalLetter").classList.remove("show");
}


document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLetter();
    }
});


function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 12000);
}


setInterval(createHeart, 700);