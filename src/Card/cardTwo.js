import React from "react";
import backgroundImage from "../../src/Img/blogImages/blogPost2.png";
import article from "../../src/Img/blogImages/blogPost7.png";
import article1 from "../../src/Img/blogImages/blogPost8.png";
import article3 from "../../src/Img/blogImages/blogPost9.png";

const CardTwo = () => {
  return (
    <>
      <div className="cardOne container">
        <h1 className="text-center mt-3">Benefit of ferment food</h1>
        <img
          className="cardImg text-center"
          style={{
            width: "100%",
            height: "30rem",
            // width: "70%",
            // margin: "auto",
            padding: "2rem",
            // padding: "2rem",
            // display: "flex",
            // justifyContent: "center",
          }}
          src={backgroundImage}
          alt=""
        />

        <p>
          Any action, no matter how minor, that promotes health and vitality can
          be considered to be part of wellness. Wellness includes eating
          healthily and exercising, but it also includes things like going on a
          stroll with a friend, practicing a balance exercise, and doing
          everyday tasks in novel ways. Furthermore, you don't need to engage in
          a behavior for a long time for it to be regarded healthy; you only
          need to do it for a few seconds or minutes.
        </p>

        <p>
          Here are some doable strategies for incorporating wellness into your
          daily life. You don't have to apply these techniques every day.
          Instead, they signify a change in how you move around the world and
          engage with it. These are but a few examples of concepts that you can
          customize for your own locations and areas. While some will be
          effective for you, others won't. Discovering what functions best for
          you is the goal.
        </p>

        {/* <P>
        Below are a few foods that have undergone fermentation. I've also
        provided several recipes that you can prepare on your own or use in
        other meals:
      </P> */}

        <ul>
          <li>
            Stand while putting on your sock. Stand on one leg while removing or
            putting on your shoes or socks as opposed to sitting down. Stand
            close to a wall or other sturdy surface so you may lean on it or, if
            required, catch your balance. Wellness benefit: Making this minor
            adjustment provides some rapid training in balance, mobility, and
            coordination.
          </li>
          <li>
            Put on the non-dominant leg or arm of the pants or jacket first.
            Without recognizing it, we develop habits of performing routine
            tasks in the same manner. Wellness advantage: Differentiating your
            routine on purpose produces a little cognitive and coordination
            challenge that is good for your body and your brain.
          </li>
          <li>
            Put a visible marker in your home to add an extra movement or
            activity to your day. As a sign of a job well done, there are four
            straws on the right side of a stairway that move one at a time to
            the left side. Visual cues can serve as reminders or as a catalyst
            for action. For instance, four metal cocktail straws are placed on
            one side of a stairwell in the animated GIF displayed. The straws
            remind you to push up as you go about your day (as just one
            example). Move one straw to the opposite side of the stairway after
            each push-up.
          </li>
          <li>
            By the end of the day, all the straws must be moved to the opposite
            side of the staircase. Benefit to your health: You can increase your
            strength during these quick bursts of action without having to get
            dressed or set aside time for exercise.
          </li>
          <li>
            Change your gait when ascending or descending stairs. Try different
            stair walking techniques, such as taking two steps at once, climbing
            the stairs backwards, or moving a little quicker or slower than
            usual. Benefit for your health: Varying your gait can enhance your
            balance, coordination, strength, and self-assurance when climbing
            stairs.
          </li>
          <li>
            Play pen spinning or jacks. You can learn how to spin pens by
            watching tutorials online. You can try it practically anyplace, but
            it takes practice. Instead, play a classic game of jacks. Wellness
            advantage: These kind of games aid in skill development and improve
            hand-eye coordination.
          </li>
          <li>
            Try walking games that make walking more challenging and cognitively
            stimulating. Here are a few ways to make your walking more
            interesting:
            <ul>
              <li>
                Path of More Resistance – Take the path of increased resistance
                by walking while balancing on the curb for a few steps, weaving
                around signs, utility poles, trees or benches or stepping on (or
                avoiding) cracks.
              </li>
            </ul>
          </li>
          <li>Explicit Cognitive Challenge</li>
          <ul>
            <li>
              Mentally recite the alphabet while skipping every other letter or
              every third letter.
            </li>
            <li>Count backward from 100 by threes or sevens, for example</li>
            <li>
              Count the number of various objects you see or things you hear.
            </li>
            <li>
              Mentally recite as many words as you can that start with a
              specific letter.
            </li>
          </ul>
          <li>
            Ball Toss – Toss a ball to yourself or a partner while walking and
            add the following variations to increase the challenge:
          </li>
          <ul>
            <li>Bounce every third toss in the air.</li>
            <li>
              Toss the ball quickly back and forth between your hands or with a
              partner.
            </li>
            <li>Toss the ball increasingly higher until you miss a catch.</li>
          </ul>
        </ul>
      </div>
      <section className="container mt-3">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={article} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Benefits of running</h5>
                <p class="card-text">
                  Running is a popular form of exercise for a reason. You can do
                  it pretty much anywhere and whenever it's handy for you
                  because it doesn't require a lot of equipment. Experts also
                  claim that it enhances cardiac health. One of the greatest
                  cardio exercises you can do is running. Your risk of
                  cardiovascular diseases can be greatly reduced by running for
                  at least 10 minutes each day. Running significantly cuts the
                  risk of dying from cardiac disease in half. Additionally, it
                  reduces
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={article1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Healthy eating</h5>
                <p class="card-text">
                  Eating a healthy diet is not about strict limitations, staying
                  unrealistically thin, or depriving yourself of the foods you
                  love. Rather, it’s about feeling great, having more energy,
                  improving your health, and boosting your mood. Healthy eating
                  doesn’t have to be overly complicated. If you feel overwhelmed
                  by all the conflicting nutrition and diet advice out there,
                  you’re not alone. It seems that for every expert who tells you
                  a certain food is good for you, you’ll
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={article3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Exercise and arthritis</h5>
                <p class="card-text">
                  An umbrella term for more than 150 distinct illnesses,
                  arthritis. The correct word for this set of ailments is
                  "musculoskeletal illnesses," as they have an impact on the
                  bones, muscles, and joints. Knowing a little something about
                  the muscles, bones, and joints that make up your
                  musculoskeletal system will help you better grasp how
                  arthritis and other musculoskeletal disorders function. A
                  joint is a structure that allows movement at the meeting point
                  of two bones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardTwo;
